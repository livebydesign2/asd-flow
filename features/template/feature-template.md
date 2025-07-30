# FEAT-XXX: [Feature Name]

## **🤖 AI AGENT QUICK START** *(Read this first - 30 seconds)*

**Problem**: [One-line problem statement]  
**Solution**: [One-line solution approach]  
**Status**: [Backlog/Active/Done] | **Priority**: [P0/P1/P2/P3] | **Complexity**: [Low/Medium/High]  
**Owner**: [AI Agent/Human] | **Updated**: [YYYY-MM-DD]

---

## **⚠️ MANDATORY AI AGENT WORKFLOW - FOLLOW EVERY TIME**

**Every AI agent working on this feature MUST follow this workflow:**

1. **📊 Show Current Progress**: Display current task status and blockers
2. **🔍 Research & Understand**: Read context files and codebase patterns  
3. **📋 Create Todo List**: Use `todo_write` tool for multi-step tasks
4. **📝 Document Progress**: Update this file as you work
5. **🧪 Test Your Work**: Validate implementation and fix errors
6. **💾 Add & Commit**: Git commit changes with descriptive messages

### **📚 Context Files** *(AI: Read these in order)*
- `ai-context/project-brief.md` ← **START HERE** (core project identity)
- `ai-context/current-state.md` (current progress and blockers)  
- `ai-context/decision-framework.md` (what AI can decide vs escalate)
- `ai-context/implementation-rules.md` (code standards and patterns)
- `decisions/technical/ADR-002-{{ARCHITECTURE_PATTERN}}.md` (data fetching approach)
- `decisions/technical/ADR-003-{{SECURITY_PATTERN}}.md` (security patterns)

### **⚠️ Critical AI Instructions**
- **Always run** `date +%Y-%m-%d` before status updates (never assume dates)
- **Use todo_write** for any multi-step task (required for >3 steps)
- **Update this file** after each major milestone
- **Test thoroughly** - this is production code, not prototype

---

## **🎯 Problem & Opportunity**

### **Current Pain Points**
<!-- AI: Focus on specific, measurable problems -->
- **[Pain Point 1]**: [Concrete impact on users/development]
- **[Pain Point 2]**: [Concrete impact on users/development]  
- **[Pain Point 3]**: [Concrete impact on users/development]

### **Why Now?** *(Perfect timing factors)*
<!-- AI: Understanding timing helps prioritize urgency -->
- ✅ **[Timing Factor 1]**: [Why this enables success]
- ✅ **[Timing Factor 2]**: [Why this enables success]
- ✅ **[Timing Factor 3]**: [Why this enables success]

---

## **💡 Solution Vision**

### **Target State**
<!-- AI: Clear end-state helps guide implementation decisions -->
```
[ASCII diagram or bullet points showing desired user flow/architecture]
```

### **Core Principle**
**[Guiding Principle]**: [One sentence describing the main approach]

---

## **📋 Requirements** *(AI: Each REQ maps to implementation tasks)*

### **REQ-001: [Category] - [Requirement Name]**
**As a** [user type]  
**I want** [capability]  
**So that** [business value]

**Acceptance Criteria**:
- [ ] [Specific, testable criterion 1]
- [ ] [Specific, testable criterion 2]
- [ ] [Specific, testable criterion 3]

### **REQ-002: [Category] - [Requirement Name]**
**As a** [user type]  
**I want** [capability]  
**So that** [business value]

**Acceptance Criteria**:
- [ ] [Specific, testable criterion 1]
- [ ] [Specific, testable criterion 2]
- [ ] [Specific, testable criterion 3]

---

## **🏗️ Technical Design**

### **Core Strategy**: [Strategy Name]
<!-- AI: This guides all implementation decisions -->

**Architecture Overview**:
```
[Simple diagram showing data/component flow]
```

### **Key Technical Principles** *(AI: Follow these when implementing)*
1. **[Principle 1]**: [Brief description - why it matters]
2. **[Principle 2]**: [Brief description - why it matters]
3. **[Principle 3]**: [Brief description - why it matters]

### **Implementation Approach**

#### **TECH-001: [Component/System Name]**
**Current State**: [What exists now]  
**Target State**: [What we want to achieve]  
**Technical Approach**: [How to implement]

**Implementation Notes**:
- [Technical pattern or approach to use]
- [Key considerations or gotchas]
- [Dependencies or prerequisites]

#### **TECH-002: [Component/System Name]**
**Current State**: [What exists now]  
**Target State**: [What we want to achieve]  
**Technical Approach**: [How to implement]

**Implementation Notes**:
- [Technical pattern or approach to use]
- [Key considerations or gotchas]
- [Dependencies or prerequisites]

---

## **🔄 Implementation Tasks**

### **Phase 1: Foundation** *(Est: [X] hours)*

**TASK-001** 🤖 **[AI TASK]** - [Task Name] ⏳
- [ ] [Specific subtask 1]
- [ ] [Specific subtask 2]
- [ ] [Specific subtask 3]
- **Files**: [List key files to create/modify]
- **Tests**: [Testing approach for this task]

**TASK-002** 🤖 **[AI TASK]** - [Task Name] ⏳
- [ ] [Specific subtask 1]
- [ ] [Specific subtask 2]
- **Dependencies**: TASK-001
- **Files**: [List key files to create/modify]

### **Phase 2: Core Implementation** *(Est: [X] hours)*

**TASK-003** 🤖 **[AI TASK]** - [Task Name] ⏳
- [ ] [Specific subtask 1]
- [ ] [Specific subtask 2]
- **Dependencies**: TASK-001, TASK-002
- **Files**: [List key files to create/modify]

### **Phase 3: Integration & Polish** *(Est: [X] hours)*

**TASK-004** 🤖 **[AI TASK]** - [Task Name] ⏳
- [ ] [Specific subtask 1]
- [ ] [Specific subtask 2]
- **Dependencies**: TASK-003
- **Files**: [List key files to create/modify]

---

## **🧪 Testing Strategy**

### **Unit Tests**
- [ ] [Component/function to test]
- [ ] [Component/function to test]

### **Integration Tests**
- [ ] [Integration scenario to test]
- [ ] [Integration scenario to test]

### **E2E Tests**
- [ ] [User flow to test]
- [ ] [User flow to test]

---

## **📊 Progress Tracking**

### **Current Status**: [Status Description]
**Last Updated**: [YYYY-MM-DD] by [AI Agent/Human]

### **Completed Tasks**
- ✅ **[DATE]** - [Task description] ([commit hash])
- ✅ **[DATE]** - [Task description] ([commit hash])

### **Active Blockers**
- 🚨 **[Blocker 1]**: [Description and resolution plan]
- 🚨 **[Blocker 2]**: [Description and resolution plan]

### **Next Actions**
1. [Next immediate action]
2. [Following action]
3. [Third action]

---

## **🔗 Links & References**

### **Codebase Context**
- **Main Route**: `app/[relevant-route]/page.tsx` (or equivalent)
- **Components**: `app/[route]/_components/` (or equivalent)
- **Server Actions**: `app/[route]/_lib/server/actions.ts` (or equivalent)
- **Database Tables**: `[table_name]` (see schema: `database/schemas/XX-name.sql`)

### **Related Documentation**
- [Link to related feature docs]
- [Link to relevant ADRs]
- [Link to external resources]

### **Dependencies**
- **Depends On**: [Other features this depends on]
- **Blocks**: [Features blocked by this one]

---

## **💡 Notes & Learnings**

### **Implementation Notes**
- [Key insight or decision made during development]
- [Pattern or approach that worked well]
- [Thing to avoid or watch out for]

### **Future Improvements**
- [Enhancement idea for later]
- [Technical debt to address]
- [Performance optimization opportunity] 