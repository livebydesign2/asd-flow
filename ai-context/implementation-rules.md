# Implementation Rules

## 🏗️ Architecture Patterns
- **Server Components First**: Default to server components, use client only for interactivity (ADR-002)
- **RLS-First Security**: All data access through RLS policies, no application-level security (ADR-003)  
- **MakerKit Extension**: Build on MakerKit patterns, never modify core files (ADR-001)
- **Mobile-First**: Responsive design starting from 320px screens

## 🎨 UI/UX Standards
- **Component Library**: shadcn/ui components with Tailwind CSS
- **Design System**: Follow MakerKit's existing patterns and spacing
- **Brand Colors**: Use {{PROJECT_NAME}} brand palette (see external `docs/brand/colors.md`)
- **Accessibility**: WCAG 2.1 AA compliance minimum
- **Performance**: <200ms page load, optimize for mobile

## 💾 Database Rules  
- **All tables**: Enable RLS, associate with accounts via `account_id` FK
- **Helper functions**: Use existing MakerKit functions (`has_role_on_account`, etc.)
- **Schema changes**: Follow process in external `docs/dev/architecture.md`
- **Migrations**: Use `pnpm supabase:web:db:diff` workflow

## 🔒 Security Rules
- **RLS First**: Database-level security, never application-level checks
- **Auth patterns**: Follow MakerKit authentication flows
- **Data access**: Server Components with automatic RLS protection
- **File uploads**: Use MakerKit storage patterns with account-based paths

## 🧪 Testing Requirements
- **Unit tests**: For business logic and utilities
- **Integration tests**: For database interactions and API routes  
- **E2E tests**: For critical user flows (see external `docs/testing/{{PROJECT_NAME_LOWER}}-e2e-integration.md`)
- **Performance tests**: Lighthouse scores >90 for key pages

## 📝 Code Standards
- **TypeScript**: Strict mode, no `any` types, proper interfaces
- **Error handling**: Follow patterns in external `docs/dev/error-handling.md`
- **Logging**: Use structured logging patterns
- **Comments**: Self-documenting code with purpose comments

## 🚀 Development Workflow
- **Setup**: Follow external `docs/dev/setup.md` for complete environment setup
- **Framework updates**: Use process in external `docs/dev/framework-update-process.md`
- **Troubleshooting**: Check external `docs/dev/troubleshooting.md` for common issues
- **Architecture**: Reference external `docs/dev/architecture.md` for system patterns

## 📚 Key Reference Documents
- **System Integration**: External `docs/dev/system-integration.md` - Complete integration patterns
- **Social Features**: External `docs/dev/social-features-reference.md` - Community feature patterns
- **Brand Guidelines**: External `docs/brand/colors.md` - {{PROJECT_NAME}} visual identity
- **Main Documentation**: External `docs/README.md` - Complete documentation index 