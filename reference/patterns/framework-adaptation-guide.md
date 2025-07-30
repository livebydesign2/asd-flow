# Framework Adaptation Guide for AI Agents

## Overview

This template defaults to **MakerKit + Supabase** patterns, but can be adapted to any framework. When a project uses a different tech stack, AI agents should follow this guide to adapt the patterns appropriately.

## Default Stack (MakerKit + Supabase)

If using the default stack, follow all existing patterns in:
- `reference/patterns/ai-development-guide.md`
- `ai-context/implementation-rules.md`
- All ADR files in `decisions/technical/`

## Framework Adaptation Process

When working with a different framework, AI agents should:

### 1. **Research Phase** (REQUIRED)
```
Before making any changes:
1. Research the chosen framework's official documentation
2. Identify the framework's recommended patterns for:
   - Authentication and authorization
   - Database access and security
   - Component organization
   - Server-side vs client-side rendering
   - Form handling and validation
   - File uploads and storage
   - Testing approaches
3. Look for official starter templates or boilerplates
4. Identify the framework's equivalent of MakerKit's patterns
```

### 2. **Pattern Mapping** (REQUIRED)
Map MakerKit concepts to framework equivalents:

| MakerKit Pattern | Alternative Framework Examples |
|------------------|--------------------------------|
| **RLS-First Security** | JWT middleware, Role-based middleware, Database-level security |
| **Server Components** | Server-side rendering, API routes, Server actions |
| **enhanceAction wrapper** | Form validation middleware, Action creators, Request handlers |
| **@kit/ui components** | Native framework components, Third-party UI libraries |
| **Account-based multi-tenancy** | User-based models, Organization models, Tenant isolation |
| **Supabase client** | ORM (Prisma, TypeORM), Database drivers, Query builders |

### 3. **Security Pattern Adaptation** (CRITICAL)
MakerKit uses RLS-first security. For other frameworks:

#### **Traditional Web Frameworks**
```typescript
// Instead of RLS, use middleware-based authorization
app.use('/api/protected', authenticateUser);
app.use('/api/admin', requireRole('admin'));

// Database queries with explicit authorization
const getUserData = async (userId: string, requestingUserId: string) => {
  if (userId !== requestingUserId && !isAdmin(requestingUserId)) {
    throw new Error('Unauthorized');
  }
  return await db.users.findById(userId);
};
```

#### **API-First Frameworks**
```typescript
// JWT-based authentication
const protectedRoute = withAuth(async (req, res) => {
  const userId = req.user.id;
  // Ensure user can only access their own data
  const data = await getUserData(userId);
  res.json(data);
});
```

### 4. **Component Organization Adaptation**

#### **MakerKit Pattern**
```
app/[route]/_components/     # Route-specific components
app/[route]/_lib/server/     # Server-side utilities
```

#### **Alternative Patterns**
```
# Next.js (non-MakerKit)
pages/api/                   # API routes
components/                  # Shared components
lib/                        # Utilities

# React SPA + Express API
frontend/src/components/     # React components
backend/routes/             # Express routes
backend/middleware/         # Auth middleware

# Django
myapp/views.py              # View functions
myapp/models.py             # Database models
myapp/templates/            # HTML templates
```

### 5. **Data Access Pattern Adaptation**

#### **MakerKit + Supabase**
```typescript
// RLS handles authorization automatically
const { data } = await supabase
  .from('user_data')
  .select('*')
  .eq('user_id', userId);
```

#### **Alternative Patterns**
```typescript
// Express + Prisma
const userData = await prisma.userData.findMany({
  where: {
    userId: req.user.id,  // Explicit authorization check
    // Additional filters based on user permissions
  }
});

// Django ORM
# views.py
def get_user_data(request):
    if not request.user.is_authenticated:
        return HttpResponseForbidden()
    
    data = UserData.objects.filter(user=request.user)
    return JsonResponse(list(data.values()))
```

## Framework-Specific Implementation Guides

### **Django + PostgreSQL**
When adapting to Django:

1. **Authentication**: Use Django's built-in User model and authentication
2. **Authorization**: Use Django permissions and groups
3. **Database**: Use Django ORM with proper model relationships
4. **Security**: Use Django's CSRF protection and security middleware
5. **Templates**: Use Django templates or integrate with React/Vue

**Key Adaptations:**
- Replace `enhanceAction` with Django form validation
- Replace RLS with Django model permissions
- Replace Supabase client with Django ORM
- Replace MakerKit components with Django forms or frontend framework

### **Laravel + MySQL**
When adapting to Laravel:

1. **Authentication**: Use Laravel Sanctum or Passport
2. **Authorization**: Use Laravel Gates and Policies
3. **Database**: Use Eloquent ORM with proper relationships
4. **Security**: Use Laravel's built-in CSRF and validation
5. **Frontend**: Use Blade templates or integrate with Vue/React

**Key Adaptations:**
- Replace Server Components with Laravel Controllers
- Replace RLS with Eloquent model policies
- Replace Supabase with Eloquent models
- Replace MakerKit UI with Laravel UI or frontend framework

### **Express + MongoDB**
When adapting to Express:

1. **Authentication**: Use Passport.js or custom JWT middleware
2. **Authorization**: Use custom middleware for role/permission checks
3. **Database**: Use Mongoose ODM with proper schemas
4. **Security**: Use helmet, cors, and express-validator
5. **Frontend**: Integrate with React, Vue, or serve static files

**Key Adaptations:**
- Replace Server Components with Express routes
- Replace RLS with explicit authorization middleware
- Replace Supabase client with Mongoose models
- Replace MakerKit patterns with Express.js best practices

## Critical Security Considerations

### **When NOT Using RLS**
Without database-level security, you MUST:

1. **Validate Every Request**
   ```typescript
   // ALWAYS check authorization before data access
   if (!canUserAccessResource(req.user, resourceId)) {
     throw new Error('Unauthorized');
   }
   ```

2. **Use Parameterized Queries**
   ```sql
   -- NEVER do this
   SELECT * FROM users WHERE id = ${userInput}
   
   -- ALWAYS do this
   SELECT * FROM users WHERE id = ?
   ```

3. **Implement Rate Limiting**
   ```typescript
   app.use(rateLimit({
     windowMs: 15 * 60 * 1000, // 15 minutes
     max: 100 // limit each IP to 100 requests per windowMs
   }));
   ```

### **Multi-Tenancy Without RLS**
```typescript
// Ensure tenant isolation at application level
const getTenantData = async (tenantId: string, userId: string) => {
  // Verify user belongs to tenant
  const userTenant = await getUserTenant(userId);
  if (userTenant.id !== tenantId) {
    throw new Error('Access denied');
  }
  
  // Add tenant filter to all queries
  return await db.data.findMany({
    where: { tenantId: tenantId }
  });
};
```

## Testing Pattern Adaptations

### **MakerKit Testing**
- Uses Supabase test database
- RLS policies tested automatically
- Component testing with MakerKit patterns

### **Alternative Framework Testing**
```typescript
// Express + Jest
describe('User API', () => {
  it('should only return user own data', async () => {
    const user = await createTestUser();
    const otherUser = await createTestUser();
    
    const response = await request(app)
      .get('/api/user-data')
      .set('Authorization', `Bearer ${user.token}`);
    
    expect(response.body).not.toContain(otherUser.data);
  });
});

// Django testing
class UserDataViewTest(TestCase):
    def test_user_can_only_access_own_data(self):
        user1 = User.objects.create_user('user1', 'user1@test.com', 'pass')
        user2 = User.objects.create_user('user2', 'user2@test.com', 'pass')
        
        self.client.login(username='user1', password='pass')
        response = self.client.get('/api/user-data/')
        
        # Should only see user1's data
        self.assertNotContains(response, user2.username)
```

## Migration Strategy

When migrating from MakerKit patterns to another framework:

### **Phase 1: Research and Plan**
1. Research target framework thoroughly
2. Map all current MakerKit patterns to framework equivalents
3. Identify security implications and mitigation strategies
4. Plan database schema changes if needed

### **Phase 2: Core Infrastructure**
1. Set up authentication system
2. Implement authorization patterns
3. Create database access layer
4. Set up security middleware

### **Phase 3: Feature Migration**
1. Migrate one feature at a time
2. Ensure security patterns are properly implemented
3. Test thoroughly, especially authorization
4. Update documentation to reflect new patterns

### **Phase 4: Optimization**
1. Optimize for framework-specific performance patterns
2. Implement framework-specific best practices
3. Update CI/CD and deployment processes
4. Train team on new patterns

## Red Flags - When to Ask for Human Help

AI agents should ask for human guidance when:

- **Security patterns are unclear** - Authorization is critical, get confirmation
- **Performance implications are significant** - Database queries, caching strategies
- **Framework choice affects architecture** - Microservices vs monolith decisions
- **Third-party integrations are complex** - Payment systems, external APIs
- **Deployment strategy changes** - Container orchestration, scaling patterns

## Validation Checklist

After adapting to a new framework, ensure:

- [ ] Authentication works and is secure
- [ ] Authorization prevents unauthorized access
- [ ] Database queries are parameterized and safe
- [ ] User data isolation is maintained
- [ ] Error handling follows framework conventions
- [ ] Logging and monitoring are implemented
- [ ] Tests cover security scenarios
- [ ] Documentation reflects new patterns
- [ ] Performance meets requirements
- [ ] Security review has been conducted

## Framework-Specific Resources

### **Django**
- [Django Security Best Practices](https://docs.djangoproject.com/en/stable/topics/security/)
- [Django Authentication](https://docs.djangoproject.com/en/stable/topics/auth/)
- [Django Testing](https://docs.djangoproject.com/en/stable/topics/testing/)

### **Laravel**
- [Laravel Security](https://laravel.com/docs/security)
- [Laravel Authentication](https://laravel.com/docs/authentication)
- [Laravel Testing](https://laravel.com/docs/testing)

### **Express.js**
- [Express Security Best Practices](https://expressjs.com/en/advanced/best-practice-security.html)
- [Passport.js Authentication](http://www.passportjs.org/)
- [Express Testing with Jest](https://jestjs.io/docs/testing-frameworks)

Remember: The goal is to maintain the same level of security and functionality while adapting to the chosen framework's idiomatic patterns.