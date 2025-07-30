# AI Development Guide for {{PROJECT_NAME}}

## How to Work with This Project

When starting any task:
1. Read `ai-context/project-brief.md` first
2. Check `ai-context/current-state.md` for current priorities
3. Review relevant ADRs in `decisions/`
4. Check framework patterns (MakerKit default, see Framework Adaptation section)
5. Check specific documentation in external `docs/dev/`

## Framework Support

**Default Stack**: {{FRAMEWORK}} + {{DATABASE}} (MakerKit + Supabase patterns)

**Alternative Frameworks**: If using a different tech stack, AI agents must:
1. **First** read `reference/patterns/framework-adaptation-guide.md`
2. **Research** the chosen framework's best practices thoroughly
3. **Adapt** all security, database, and component patterns accordingly
4. **Validate** that security patterns are properly implemented

## Project Vocabulary & Keywords

### Core Technologies (Default: MakerKit Stack)
- **{{FRAMEWORK}}** - {{ARCHITECTURE_PATTERN}} framework
- **{{DATABASE}}** - Database with {{SECURITY_PATTERN}}
- **{{STYLING}}** - Styling system
- **TypeScript** - Strict configuration with enhanced patterns
- **{{AUTH_SYSTEM}}** - Authentication and authorization

*Note: If using different technologies, see `reference/patterns/framework-adaptation-guide.md`*

### Domain-Specific Terms
- **{{MAIN_ENTITY}}** - {{DOMAIN_TYPE}} primary entity (e.g., {{CORE_FEATURE_1}})
- **{{SECONDARY_ENTITY}}** - Supporting entity for {{MAIN_ENTITY}}s
- **Template** - Starter configuration for new {{MAIN_ENTITY}}s
- **Categories** - {{DOMAIN_TYPE}} classification system
- **Account** - User accounts ({{DATA_PATTERN}} architecture)
- **Security** - {{SECURITY_PATTERN}} (database security approach)

### Architecture Keywords
- **{{DATA_PATTERN}}** - Data access and tenant isolation approach
- **{{ARCHITECTURE_PATTERN}}** - Primary architectural pattern
- **Action Wrapper** - Server action validation wrapper (framework-specific)
- **Component Library** - UI component system ({{STYLING}})
- **Data Ownership** - How data is associated with users/accounts

## Common Development Patterns

### File Organization
- `apps/web/app/` - Next.js App Router pages and layouts
- `apps/web/app/home/(user)/` - Personal account routes
- `apps/web/app/home/[account]/` - Team account routes  
- `apps/web/app/(marketing)/` - Public marketing pages
- `apps/web/app/[route]/_components/` - Route-specific components
- `apps/web/app/[route]/_lib/server/` - Server-side utilities and actions
- `packages/` - Shared packages and utilities

### Naming Conventions
- **Variables**: camelCase
- **Functions**: camelCase with descriptive verbs
- **Files**: kebab-case (e.g., `create-setup-form.tsx`)
- **Components**: PascalCase (e.g., `CreateSetupForm`)
- **Server Actions**: `[verb][noun]Action` (e.g., `createSetupAction`)

### Code Style Guidelines
- Refer to: `CLAUDE.md` for complete MakerKit patterns
- TypeScript: Strict configuration, prefer type inference
- Components: Functional components with TypeScript interfaces
- Forms: React Hook Form + Zod validation + Server Actions
- Data Fetching: Server Components first, Client Components for interactivity

## Database Security Guidelines ⚠️

### Critical Security Rules - READ CAREFULLY!

**Database Security Fundamentals:**
- **Always enable RLS** on new tables unless explicitly instructed otherwise
- **NEVER use SECURITY DEFINER functions** without explicit access controls - they bypass RLS entirely
- **Always use security_invoker=true for views** to maintain proper access control
- **Storage buckets MUST validate access** using account_id in the path structure
- **Use locks if required** for concurrent operations to prevent race conditions

### Existing Helper Functions - Use These! 📚

**DO NOT recreate these functions - they already exist:**

```sql
-- Account Access Control
public.has_role_on_account(account_id, role?)     -- Check team membership
public.has_permission(user_id, account_id, permission)  -- Check permissions
public.is_account_owner(account_id)               -- Verify ownership
public.has_active_subscription(account_id)        -- Subscription status
public.is_team_member(account_id, user_id)        -- Direct membership check
public.can_action_account_member(target_account_id, target_user_id) -- Member action rights

-- Administrative Functions
public.is_super_admin()                           -- Super admin check
public.is_aal2()                                  -- MFA verification
public.is_mfa_compliant()                         -- MFA compliance

-- Configuration
public.is_set(field_name)                         -- Feature flag checks
```

Always check `apps/web/supabase/schemas/` before creating new functions!

### RLS Policy Best Practices ✅

```sql
-- Proper RLS using existing helper functions
CREATE POLICY "notes_read" ON public.notes FOR SELECT
  TO authenticated USING (
    account_id = (select auth.uid()) OR
    public.has_role_on_account(account_id)
  );

-- For operations requiring specific permissions
CREATE POLICY "notes_manage" ON public.notes FOR ALL
  TO authenticated USING (
    public.has_permission(auth.uid(), account_id, 'notes.manage'::app_permissions)
  );
```

### Security Definer - Safe Pattern Only ✅

```sql
-- ONLY use SECURITY DEFINER with explicit access validation
CREATE OR REPLACE FUNCTION public.safe_admin_function(target_account_id uuid)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = '' AS $
BEGIN
  -- MUST validate caller has permission FIRST
  IF NOT public.is_account_owner(target_account_id) THEN
    RAISE EXCEPTION 'Access denied: insufficient permissions';
  END IF;

  -- Now safe to proceed with elevated privileges
  -- Your admin operation here
END;
$;
```

## Performance Optimization Patterns 🚀

### Parallel Data Fetching (Critical)

**Sequential (Slow) Pattern ❌**
```typescript
async function SlowDashboard() {
  const userData = await loadUserData();
  const notifications = await loadNotifications();
  const metrics = await loadMetrics();
  // Total time: sum of all requests
}
```

**Parallel (Optimized) Pattern ✅**
```typescript
async function FastDashboard() {
  // Execute all requests simultaneously
  const [userData, notifications, metrics] = await Promise.all([
    loadUserData(),
    loadNotifications(),
    loadMetrics()
  ]);
  // Total time: longest single request

  return <Dashboard user={userData} notifications={notifications} metrics={metrics} />;
}
```

**Performance Impact**: Parallel fetching can reduce page load time by 60-80% for multi-data pages!

## Authorization Patterns - Critical Understanding 🔐

### RLS-Protected Data Fetching (Standard) ✅

```typescript
async function getUserNotes(userId: string) {
  const client = getSupabaseServerClient();

  // RLS automatically ensures user can only access their own notes
  // NO additional authorization checks needed!
  const { data } = await client.from('notes').select('*').eq('user_id', userId);

  return data;
}
```

**Key Insight**: Server Components automatically inherit RLS protection - no additional authorization checks needed!

### Admin Client Usage (Dangerous - Rare Cases Only) ⚠️

```typescript
async function adminGetUserNotes(userId: string) {
  const adminClient = getSupabaseServerAdminClient();

  // CRITICAL: Manual authorization required - bypasses RLS!
  const currentUser = await getCurrentUser();
  if (!(await isSuperAdmin(currentUser))) {
    throw new Error('Unauthorized: Admin access required');
  }

  // Additional validation: ensure current admin isn't targeting themselves
  if (currentUser.id === userId) {
    throw new Error('Cannot perform admin action on own account');
  }

  // Now safe to proceed with admin privileges
  const { data } = await adminClient
    .from('notes')
    .select('*')
    .eq('user_id', userId);

  return data;
}
```

**Rule of thumb**: If using standard Supabase client, trust RLS. If using admin client, validate everything manually.

## Typical Task Workflows

### Adding a New Feature
1. Check existing patterns in similar routes (e.g., setups → gear)
2. Follow MakerKit component patterns from `@kit/ui`
3. Use Server Components for data loading with RLS protection
4. Implement Server Actions with `enhanceAction` for mutations
5. Add translations to appropriate JSON files in `public/locales/en/`
6. Test with E2E patterns in `apps/e2e/tests/`

### Database Changes
1. Create new schema file in `apps/web/supabase/schemas/[number]-[name].sql`
2. Use MakerKit helper functions (has_role_on_account, has_permission)
3. Always enable RLS and create appropriate policies
4. After changes: `pnpm supabase:web:stop`
5. Run: `pnpm --filter web run supabase:db:diff -f <filename>`
6. Restart: `pnpm supabase:web:start` and `pnpm supabase:web:reset`
7. Generate types: `pnpm supabase:web:typegen`

### Bug Fixes
1. Check external `docs/dev/troubleshooting.md` for known issues
2. Review RLS policies if data access issues
3. Verify component hierarchy follows MakerKit patterns
4. Check Server Action validation and error handling

### UI/Component Work
1. Use exclusively `@kit/ui` components - never custom UI libraries
2. Follow MakerKit design tokens and spacing patterns
3. Use {{PROJECT_NAME}} brand colors from external `docs/brand/colors.md`
4. Implement responsive design (mobile-first)
5. Use MakerKit navigation and layout patterns
6. Add proper internationalization with Trans component

## Error Handling & Logging 📊

### Structured Logging

Use logger from `@packages/shared/src/logger/logger.ts`:

```typescript
import { getLogger } from '@kit/shared/logger';

async function myServerAction() {
  const logger = await getLogger();
  const ctx = { name: 'myOperation', userId: user.id };

  try {
    logger.info(ctx, 'Operation started');
    // ...
  } catch (error) {
    logger.error({ ...ctx, error }, 'Operation failed');
    // handle error
  }
}
```

**For detailed error handling patterns**: See external `docs/dev/error-handling.md`

## Where to Find Information

| Need | Location |
|------|----------|
| Product requirements | `@strategic/` |
| Feature specifications | `@features/` |
| User research/insights | `@strategic/research/` |
| Project planning | `@strategic/roadmap.md` |
| MakerKit patterns | `CLAUDE.md` (comprehensive guide) |
| Database schema | `apps/web/supabase/schemas/` |
| Environment setup | External `docs/dev/setup.md` |
| System architecture | External `docs/dev/architecture.md` |
| Integration patterns | External `docs/dev/system-integration.md` |
| API patterns | External `docs/dev/` |
| Component examples | `apps/web/app/home/(user)/setups/` |
| Translation files | `apps/web/public/locales/en/` |
| E2E tests | External `docs/testing/{{PROJECT_NAME_LOWER}}-e2e-integration.md` |
| Architecture decisions | `@decisions/` |
| Troubleshooting | External `docs/dev/troubleshooting.md` |
| Brand guidelines | External `docs/brand/colors.md` |

### Key Implementation Examples

- Marketing layout: `@apps/web/app/(marketing)/layout.tsx`
- Personal dashboard: `@apps/web/app/home/(user)/page.tsx`
- Team workspace: `@apps/web/app/home/[account]/page.tsx`
- Team components: `@apps/web/app/home/[account]/_components/`
- Team server utils: `@apps/web/app/home/[account]/_lib/server/`
- Contact form: `@apps/web/app/(marketing)/contact/_components/contact-form.tsx`
- Team billing: `@apps/web/app/home/[account]/billing/_lib/server/server-actions.ts`
- Personal settings: `@apps/web/app/home/(user)/settings/_lib/server/server-actions.ts`

## Red Flags - When to Ask for Clarification

- **Creating custom UI components** instead of using @kit/ui
- **Bypassing RLS** or using admin clients without explicit security checks
- **Direct database access** without proper Server Component patterns
- **Adding external dependencies** not compatible with MakerKit
- **Modifying core MakerKit files** that would break update capability
- **Custom authentication/security** mechanisms outside MakerKit patterns
- **Non-account-based data** that breaks multi-tenant architecture
- **Using SECURITY DEFINER functions** without explicit access validation
- **Creating helper functions** that already exist in the schema

## Campfire-Specific Development Notes

### Outdoor Platform Context
- All gear and setups are categorized by outdoor activity type
- Users can have both personal and team accounts
- Public sharing is a core feature (browse page, public profiles)
- Community features include messaging, feed, and reviews

### Data Relationships
- **Accounts** → **Setups** → **Gear Items** (setup_gear_items join table)
- **Base Templates** → **Setups** (starting configurations)
- **Posts** → **Feed** (social content)
- **Messages** → **Conversations** (community messaging)

### Security Patterns
- All data access through RLS with account_id foreign keys
- Public data controlled by `is_public` boolean flags
- Team permissions use has_role_on_account() patterns
- File uploads use MakerKit storage buckets with RLS

### Performance Considerations
- Server Components for initial data loading (fast, SEO-friendly)
- Client Components only for real-time features or complex interactions
- Database queries use parallel Promise.all() for efficiency
- Image galleries use Next.js Image component for optimization

## Essential Commands Reference

### Development Workflow
```bash
pnpm dev                    # Start all apps
pnpm --filter web dev       # Main app (port 3000)
pnpm --filter dev-tool dev  # Dev tools (port 3010)
pnpm build                  # Build all apps
```

### Database Operations
```bash
pnpm supabase:web:start     # Start Supabase locally
pnpm supabase:web:reset     # Reset with latest schema
pnpm supabase:web:typegen   # Generate TypeScript types
pnpm --filter web supabase:db:diff  # Create migration
```

### Code Quality
```bash
pnpm lint && pnpm format    # Lint and format
pnpm typecheck              # Type checking
pnpm test                   # Run tests
```

## 📚 Additional Documentation References

- **Complete Setup Guide**: External `docs/dev/setup.md`
- **System Architecture**: External `docs/dev/architecture.md`
- **Integration Patterns**: External `docs/dev/system-integration.md`
- **Error Handling**: External `docs/dev/error-handling.md`
- **Troubleshooting**: External `docs/dev/troubleshooting.md`
- **Framework Updates**: External `docs/dev/framework-update-process.md`
- **E2E Testing**: External `docs/testing/{{PROJECT_NAME_LOWER}}-e2e-integration.md`
- **Brand Guidelines**: External `docs/brand/colors.md`
- **Social Features**: External `docs/dev/social-features-reference.md`
- **Main Documentation Index**: External `docs/README.md` 