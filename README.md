# ASD Flow Template
**Agentic Spec Development Flow**

**Project-Agnostic Template for {{TEAM_SIZE}} Agentic Development**

ASD Flow provides a complete agentic spec-driven development system that can be customized for any project. It includes proven patterns for AI agents working with human product owners to rapidly build and iterate on features while maintaining high quality and clear context.

## 🚀 Quick Start

**New to this template?** → Read `QUICK_START.md`  
**Ready to customize?** → Follow `SETUP_GUIDE.md`  
**Need to validate?** → Run `node validate-template.js`

---

## Template Overview

This is a **project-agnostic template** with variables like `{{PROJECT_NAME}}`, `{{DOMAIN_TYPE}}`, etc. that need to be customized for your specific project. Once customized, it becomes your project's ASD Flow development documentation system.

---

## 🚀 Quick Start for AI Agents

### **Every AI Agent Must Start Here:**
1. **Read** `ai-context/project-brief.md` ← Core project identity
2. **Check** `ai-context/current-state.md` ← What's happening now  
3. **Review** `ai-context/decision-framework.md` ← What you can decide vs escalate
4. **Follow** `ai-context/implementation-rules.md` ← Code standards & patterns

### **When Working on Features:**
1. **Find** the feature in `features/active/FEAT-XXX-name.md`
2. **Follow** the mandatory AI workflow in the feature file
3. **Use** `todo_write` tool for multi-step tasks
4. **Update** progress as you work
5. **Test** thoroughly before marking complete

### **Essential Documentation References:**
- **Setup Environment**: External `docs/dev/setup.md` - Complete development setup
- **System Architecture**: External `docs/dev/architecture.md` - Technical architecture guide  
- **Troubleshooting**: External `docs/dev/troubleshooting.md` - Common issues & solutions
- **Testing Guide**: External `docs/testing/{{PROJECT_NAME_LOWER}}-e2e-integration.md` - E2E testing setup

---

## 📁 Documentation Structure

```
docs/product/
├── ai-context/                    # 🤖 AI-optimized context (always loaded)
│   ├── project-brief.md           # Core identity & constraints (300 tokens)
│   ├── current-state.md           # What's happening right now (200 tokens)
│   ├── decision-framework.md      # AI decision boundaries (400 tokens)
│   └── implementation-rules.md    # Code standards & patterns (300 tokens)
│
├── strategic/                     # 🎯 Human strategic input
│   ├── vision.md                  # Product vision & target users
│   ├── roadmap.md                 # Feature prioritization & timeline
│   └── research/                  # Market research & user insights
│
├── features/                      # 📋 State-based feature organization
│   ├── backlog/                   # Features planned but not started
│   ├── active/                    # Features currently being worked on
│   ├── done/                      # Completed features (for reference)
│   └── template/                  # Templates for new features
│       └── feature-template.md    # Comprehensive feature spec template
│
├── decisions/                     # 🏗️ Architecture Decision Records
│   ├── technical/                 # Technical architecture decisions
│   ├── product/                   # Product direction decisions
│   └── archived/                  # Historical decisions
│
└── reference/                     # 📚 Query-able knowledge base
    ├── patterns/                  # Development patterns & guides
    ├── examples/                  # Implementation examples
    └── troubleshooting/           # Common issues & solutions
```

**Related Documentation:**
- **Complete docs structure**: External `docs/README.md` - Full documentation index
- **Development guides**: External `docs/dev/` - Technical implementation guides
- **Brand guidelines**: External `docs/brand/` - Visual identity and design system

---

## 🔄 AI-First Development Workflow

### **Feature Lifecycle**
```
💡 Idea → 📝 Spec → 🏗️ Build → 🧪 Test → ✅ Ship → 📊 Learn
```

### **1. Feature Planning (Human-Led)**
- **Human** creates feature spec using `features/template/feature-template.md`
- **Human** places in `features/backlog/FEAT-XXX-name.md`
- **Human** updates `ai-context/current-state.md` with priorities

### **2. Feature Development (AI-Led)**
- **AI Agent** moves feature from `backlog/` to `active/`
- **AI Agent** follows mandatory workflow in feature file:
  1. 📊 Show current progress
  2. 🔍 Research & understand context
  3. 📋 Create todo list with `todo_write`
  4. 📝 Document progress
  5. 🧪 Test implementation
  6. 💾 Commit with descriptive messages

### **3. Feature Completion (Collaborative)**
- **AI Agent** implements according to acceptance criteria
- **Human** reviews and approves
- **AI Agent** moves feature to `features/done/`
- **Human** updates strategic documents as needed

---

## 📋 Feature Specification Format

Each feature uses our comprehensive template that combines:

- **🤖 AI Quick Start** - 30-second context for agents
- **⚠️ Mandatory Workflow** - Step-by-step process
- **🎯 Problem & Opportunity** - Why this feature matters
- **💡 Solution Vision** - What we're building
- **📋 Requirements** - User stories with acceptance criteria
- **🏗️ Technical Design** - Implementation approach
- **🔄 Implementation Tasks** - Phased task breakdown
- **🧪 Testing Strategy** - How to validate quality
- **📊 Progress Tracking** - Status and blockers
- **🔗 Links & References** - Codebase context

---

## 🎯 Design Principles

### **For AI Agents**
- **Context First** - Always read ai-context files before starting
- **Spec-Driven** - Follow feature specifications precisely
- **Test-Driven** - Validate implementation thoroughly
- **Progress-Driven** - Update status as you work
- **Quality-Driven** - Production-ready code only

### **For Human Product Owners**
- **Clarity First** - Write clear, specific requirements
- **Context Rich** - Provide business reasoning
- **Constraint Clear** - Define boundaries and limitations
- **Feedback Fast** - Review and approve quickly
- **Iteration Ready** - Expect rapid feature cycles

### **For the System**
- **AI-Optimized** - Structured for machine parsing
- **Human-Readable** - Clear for human review
- **Version-Controlled** - Track all changes
- **Searchable** - Easy to find information
- **Maintainable** - Easy to update and evolve

---

## 🛠️ Tools & Integration

### **Required AI Tools**
- `todo_write` - Task management for complex features
- `codebase_search` - Understanding existing patterns
- `edit_file` - Making code changes
- `run_terminal_cmd` - Running tests and builds

### **Development Stack**
- **Framework**: {{FRAMEWORK}} + {{MAKERKIT_VERSION}}
- **Database**: {{DATABASE}} + {{SECURITY_PATTERN}}
- **Styling**: {{STYLING}} + {{PROJECT_NAME}} brand colors
- **Language**: TypeScript (strict mode)
- **Architecture**: {{ARCHITECTURE_PATTERN}}

### **Quality Gates**
- **TypeScript**: Zero compilation errors
- **Tests**: All tests passing (see external `docs/testing/{{PROJECT_NAME_LOWER}}-e2e-integration.md`)
- **Performance**: <500ms page load
- **Accessibility**: WCAG 2.1 AA compliance
- **Security**: RLS-first data access

---

## 📊 Success Metrics

### **Development Velocity**
- **Feature Cycle Time**: Spec → Ship in <1 week
- **Bug Rate**: <5% of features require post-ship fixes
- **Context Switch Time**: AI agent productive in <5 minutes

### **Quality Metrics**
- **User Satisfaction**: Features meet acceptance criteria
- **Performance**: All pages load <500ms
- **Security**: Zero data access violations
- **Accessibility**: 100% WCAG compliance

### **Process Metrics**
- **Documentation Coverage**: 100% of features have specs
- **Decision Tracking**: All major decisions documented
- **Knowledge Retention**: AI agents can work independently

---

## 🚨 Common Pitfalls & Solutions

### **For AI Agents**
- ❌ **Starting without reading context** → ✅ Always read ai-context files first
- ❌ **Skipping the mandatory workflow** → ✅ Follow the 6-step process every time
- ❌ **Not using todo_write for complex tasks** → ✅ Break down multi-step work
- ❌ **Forgetting to update progress** → ✅ Document as you work
- ❌ **Ignoring existing patterns** → ✅ Check external `docs/dev/` for established patterns

### **For Humans**
- ❌ **Vague requirements** → ✅ Write specific, testable acceptance criteria
- ❌ **Missing business context** → ✅ Explain why the feature matters
- ❌ **Unclear constraints** → ✅ Define technical and business boundaries
- ❌ **Slow feedback** → ✅ Review AI work within 24 hours

---

## 🔄 Continuous Improvement

This documentation system evolves based on:
- **AI Agent feedback** - What works, what doesn't
- **Human experience** - Pain points and successes  
- **Project outcomes** - Feature quality and velocity
- **Industry best practices** - Latest AI-first development patterns

### **How to Contribute**
1. **Identify** improvement opportunities
2. **Document** the problem and proposed solution
3. **Test** changes with real features
4. **Update** templates and processes
5. **Share** learnings with the team

---

## 📚 Additional Resources

### **Core Documentation**
- **Main Documentation Index**: External `docs/README.md` - Complete documentation structure
- **Development Setup**: External `docs/dev/setup.md` - Environment configuration
- **System Architecture**: External `docs/dev/architecture.md` - Technical architecture
- **Integration Patterns**: External `docs/dev/system-integration.md` - System integration guide
- **Error Handling**: External `docs/dev/error-handling.md` - Error handling patterns
- **Troubleshooting**: External `docs/dev/troubleshooting.md` - Common issues & solutions

### **Testing & Quality**
- **E2E Testing**: External `docs/testing/{{PROJECT_NAME_LOWER}}-e2e-integration.md` - End-to-end testing
- **Framework Updates**: External `docs/dev/framework-update-process.md` - Safe update process

### **Design & Brand**
- **Brand Colors**: External `docs/brand/colors.md` - {{PROJECT_NAME}} visual identity
- **Social Features**: External `docs/dev/social-features-reference.md` - Community patterns

### **External Resources**
- **{{FRAMEWORK}} Documentation**: [Framework-specific docs URL]
- **{{DATABASE}} Security Guide**: [Database security documentation]
- **{{ARCHITECTURE_PATTERN}} Guide**: [Architecture pattern documentation]
- **{{STYLING}} Components**: [Component library documentation]

---

**Last Updated**: 2025-01-29  
**Version**: 1.0.0  
**Status**: Active - Ready for AI-first development