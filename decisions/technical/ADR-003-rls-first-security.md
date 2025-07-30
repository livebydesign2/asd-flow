# ADR-003: RLS-First Security Architecture

**Status**: Accepted
**Date**: 2025-07-27
**Deciders**: AI Development Team, following MakerKit security patterns

## Context and Problem Statement

Campfire handles sensitive user data including personal gear inventories, private setups, and community communications. The security architecture needed to be robust, scalable, and aligned with MakerKit's multi-tenant patterns while providing appropriate access controls for outdoor platform features.

## Decision Drivers

* **Multi-Tenant Security**: Ensure data isolation between personal and team accounts
* **Defense in Depth**: Multiple layers of security with database-level enforcement
* **Developer Productivity**: Minimize security-related bugs through automatic enforcement
* **MakerKit Alignment**: Use established framework security patterns
* **Scalability**: Security model that scales with user growth

## Considered Options

* **Option 1**: Application-level security with defensive programming
* **Option 2**: Hybrid security with some RLS and some application logic
* **Option 3**: RLS-first with database-level security enforcement

## Decision Outcome

Chosen option: "RLS-first with database-level security enforcement"

All data access will be controlled by PostgreSQL Row Level Security policies at the database level, with MakerKit's helper functions providing consistent permission checking across all tables.

### Positive Consequences
* **Automatic Enforcement**: Security policies enforced at the database level, impossible to bypass
* **Reduced Bugs**: Eliminates possibility of security bugs in application logic
* **Consistent Patterns**: All tables use same security model and helper functions
* **Performance**: Database-native security with optimized query planning
* **Audit Trail**: Database logs provide complete access audit trail

### Negative Consequences
* **Learning Curve**: Developers must understand RLS policy writing
* **Debugging Complexity**: RLS failures can be harder to debug than application logic
* **Policy Maintenance**: RLS policies must be maintained alongside schema changes

## Pros and Cons of the Options

### Option 1: Application-Level Security
* Good, because familiar to most developers
* Good, because easier to debug and modify
* Good, because flexible conditional logic
* Bad, because prone to security bugs and bypass vulnerabilities
* Bad, because requires defensive programming throughout application
* Bad, because inconsistent enforcement across different code paths
* Bad, because violates MakerKit's established patterns

### Option 2: Hybrid Security
* Good, because allows flexibility where needed
* Good, because can optimize for specific use cases
* Bad, because creates complexity and inconsistency
* Bad, because potential for security gaps at boundaries
* Bad, because more difficult to audit and maintain

### Option 3: RLS-First Security
* Good, because impossible to bypass security at application level
* Good, because consistent enforcement across all data access
* Good, because follows MakerKit patterns exactly
* Good, because reduces security-related development overhead
* Bad, because learning curve for RLS policy development
* Bad, because can be more complex to debug when issues occur

## Implementation Notes

### Core Security Helper Functions

MakerKit provides these helper functions used across all Campfire tables:

```sql
-- Account membership checking
public.has_role_on_account(account_id uuid, role varchar(50) default null) returns boolean

-- Permission checking
public.has_permission(user_id uuid, account_id uuid, permission_name app_permissions) returns boolean

-- Account ownership
public.is_account_owner(account_id uuid) returns boolean

-- Team membership
public.is_team_member(account_id uuid, user_id uuid) returns boolean

-- Admin privileges
public.is_super_admin() returns boolean
```

### Standard RLS Policy Patterns

#### Basic Read Access
```sql
create policy "setups_read" on public.setups 
  for select to authenticated 
  using (
    public.has_role_on_account(account_id) OR
    (is_public = true)
  );
```

#### Permission-Based Write Access
```sql
create policy "setups_manage" on public.setups 
  for all to authenticated 
  using (
    public.has_permission(auth.uid(), account_id, 'setups.manage'::app_permissions)
  )
  with check (
    public.has_permission(auth.uid(), account_id, 'setups.manage'::app_permissions)
  );
```

#### Owner-Only Access
```sql
create policy "gear_owner" on public.gear 
  for all to authenticated 
  using (account_id = auth.uid())
  with check (account_id = auth.uid());
```

### Security Architecture

#### Data Access Layers
```
┌─────────────────────────────────────────────────────────┐
│                    Application Layer                     │
│  - Server Components (automatic RLS)                   │
│  - Server Actions (automatic RLS)                      │
│  - No defensive security code needed                   │
└─────────────────────────────────────────────────────────┘
                             │
                             ▼
┌─────────────────────────────────────────────────────────┐
│                  Supabase Client Layer                  │
│  - RLS policies applied automatically                  │
│  - User context (auth.uid()) available                 │
│  - Helper functions for permission checking            │
└─────────────────────────────────────────────────────────┘
                             │
                             ▼
┌─────────────────────────────────────────────────────────┐
│                   PostgreSQL Database                   │
│  - Row Level Security enforcement                      │
│  - Policy evaluation for every query                   │
│  - Automatic query rewriting                           │
└─────────────────────────────────────────────────────────┘
```

#### Account-Based Security Model

All Campfire tables follow this pattern:
- **account_id**: Foreign key to accounts table (required)
- **RLS Policies**: Use account_id for access control
- **Helper Functions**: Consistent permission checking across tables

#### Public Content Security

For public features (browse page, public profiles):
```sql
-- Allow public read access to marked content
create policy "setups_public_read" on public.setups 
  for select to authenticated, anon 
  using (is_public = true);

-- Strict write access for owners only
create policy "setups_public_write" on public.setups 
  for update to authenticated 
  using (public.has_role_on_account(account_id))
  with check (public.has_role_on_account(account_id));
```

### Storage Security

File uploads use the same RLS patterns:
```sql
-- Setup images accessible by account members or public if setup is public
create policy "setup_images" on storage.objects 
  for all using (
    bucket_id = 'setup-images' AND (
      kit.get_setup_id_from_storage_path(name) = auth.uid() OR
      public.has_role_on_account(kit.get_setup_id_from_storage_path(name)) OR
      EXISTS (
        SELECT 1 FROM public.setups 
        WHERE id = kit.get_setup_id_from_storage_path(name) 
        AND is_public = true
      )
    )
  );
```

### Development Patterns

#### Server Component Data Access
```typescript
// Automatic RLS protection - no additional security code needed
async function SetupPage({ params }: { params: { id: string } }) {
  const client = getSupabaseServerClient();
  
  // RLS automatically filters based on user permissions
  const { data: setup } = await client
    .from('setups')
    .select('*')
    .eq('id', params.id)
    .single();
    
  // If user doesn't have access, setup will be null
  if (!setup) {
    notFound();
  }
  
  return <SetupView setup={setup} />;
}
```

#### Server Action Security
```typescript
'use server';
export const updateSetupAction = enhanceAction(
  async (data, user) => {
    const client = getSupabaseServerClient();
    
    // RLS policies automatically enforce permissions
    const { data: setup, error } = await client
      .from('setups')
      .update(data)
      .eq('id', data.id)
      .select()
      .single();
      
    if (error) {
      throw new Error('Access denied or setup not found');
    }
    
    return setup;
  },
  {
    auth: true,
    schema: UpdateSetupSchema,
  }
);
```

### Security Testing

#### Database Tests
```sql
-- Test RLS policies directly
BEGIN;
SELECT set_config('role', 'authenticated', true);
SELECT set_config('request.jwt.claims', '{"sub":"user1"}', true);

-- Should return only user1's setups
SELECT * FROM setups;

-- Should fail for other user's private setups
INSERT INTO setups (account_id, title) VALUES ('user2', 'Test Setup');
ROLLBACK;
```

#### E2E Security Tests
```typescript
test('setup access control', async ({ page }) => {
  // User 1 creates private setup
  await user1.createSetup({ title: 'Private Setup', isPublic: false });
  
  // User 2 should not see private setup
  await user2.login();
  await expect(page.getByText('Private Setup')).not.toBeVisible();
  
  // User 2 should not be able to access private setup URL
  await page.goto('/setup/private-setup-id');
  await expect(page.getByText('Not Found')).toBeVisible();
});
```

## Migration Impact

### Security Improvements
- **Eliminated Security Bugs**: No application-level security code to contain bugs
- **Consistent Enforcement**: All data access uses same security model
- **Audit Compliance**: Database-level access logging for all queries
- **Performance**: Database-optimized security with minimal overhead

### Development Benefits
- **Simplified Code**: No defensive programming required
- **Faster Development**: Security enforced automatically
- **Easier Reviews**: Security model centralized in database policies
- **Testing**: Security can be tested at database level

## Links

* [Supabase RLS Documentation](https://supabase.com/docs/guides/auth/row-level-security)
* [PostgreSQL RLS Guide](https://www.postgresql.org/docs/current/ddl-rowsecurity.html)
* [MakerKit Security Patterns](https://makerkit.dev/docs/security)
* [Database Security Testing Guide](../dev/database-testing.md) 