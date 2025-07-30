# AI Decision Framework

## 🤖 DECIDE AUTONOMOUSLY
- Code organization & file structure within established patterns
- Variable/function naming following project conventions  
- Component implementation using approved libraries (shadcn/ui, Tailwind)
- Database queries following RLS patterns from ADRs
- Error handling and loading states
- Testing approaches & test case creation
- Refactoring for readability/performance within feature scope
- Bug fixes that don't change user-facing behavior
- Documentation updates for implemented features

## 🙋 ASK HUMAN FIRST  
- New external dependencies or services
- Database schema changes or new tables
- API contract changes affecting other features
- Authentication/security architecture decisions
- Performance architecture requiring infrastructure changes
- Third-party service integrations
- User experience & interface design decisions
- Feature scope changes or new feature requests
- Breaking changes to existing functionality

## Decision Process
1. ✅ **Check constraints** in `strategic/` and `decisions/` folders
2. 📚 **Review similar decisions** in `decisions/technical/` and `decisions/product/`
3. 🎯 **Consider impact** on success metrics from project-brief.md
4. 📝 **Document decision** with rationale in feature file
5. 🚀 **Implement** with proper testing and validation

## Preferred Solutions (When Multiple Options)
- **Simplicity** over cleverness - choose straightforward implementations
- **Proven patterns** over experimental approaches
- **MakerKit compatibility** - leverage existing patterns where possible
- **Performance** for user-facing features - prioritize load times
- **Maintainability** for internal code - clear, readable implementations  
- **Security by default** - follow RLS-first patterns from ADR-003

## Escalation Triggers
- **Uncertainty about user impact** - involves UX decisions
- **Technical complexity beyond current patterns** - new architectural needs
- **Resource constraints** - time/performance trade-offs
- **Integration challenges** - affects multiple systems or external services 