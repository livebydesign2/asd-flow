# TASK: Convert Campfire Template to Project-Agnostic AI-First Development Template

## **🤖 AI AGENT QUICK START** *(Read this first - 30 seconds)*

**Problem**: Template is Campfire/outdoor gear specific, needs to be project-agnostic  
**Solution**: Create reusable template with variable placeholders and multiple domain examples  
**Status**: Active | **Priority**: P0 | **Complexity**: High  
**Owner**: AI Agent | **Updated**: 2025-07-30

---

## **⚠️ MANDATORY AI AGENT WORKFLOW - FOLLOW EVERY TIME**

**Every AI agent working on this task MUST follow this workflow:**

1. **📊 Show Current Progress**: Print progress report for user (overall feature completion, completed tasks, current task, blockers)
2. **🔍 Research & Understand**: Read relevant docs, ask clarifying questions and **STOP and Wait for User to respond**   
3. **📋 Create Todo List**: Use `TodoWrite` tool call for multi-step tasks
4. **📝 Document Progress**: Update ## Progress Tracking section with completed tasks and current status and update the [✅] task to show completed or in progress
5. **🧪 Test Your Work**: Run validation commands and fix errors
   - **Database**: `cd apps/web && supabase test run [test-file].sql` 
   - **TypeScript**: `pnpm typecheck` (fix all type errors)
   - **Linting**: `pnpm lint && pnpm format` (fix all lint issues)
6. **💾 Add & Commit**: Git commit changes with descriptive messages

### **📚 Context Files** *(AI: Read these in order)*
- `README.md` ← **START HERE** (current template overview)
- `ai-context/project-brief.md` (Campfire-specific context to generalize)
- `ai-context/implementation-rules.md` (MakerKit-specific patterns to abstract)
- `strategic/vision.md` (outdoor gear vision to make generic)

### **⚠️ Critical AI Instructions**
- **Always run** `date +%Y-%m-%d` before status updates (never assume dates)
- **Use TodoWrite** for any multi-step task (required for >3 steps)
- **Update this file** after each major milestone
- **Test thoroughly** - this template will be used by other teams

---

## **🎯 Problem & Opportunity**

### **Current Pain Points**
- **Domain Lock-in**: All content is Campfire/outdoor gear specific
- **Tech Stack Assumptions**: Hardcoded MakerKit/Supabase patterns throughout
- **Context Link Breaks**: References to `@docs/` files that don't exist in template
- **Limited Reusability**: Cannot adapt to other business domains without extensive rewrites

### **Why Now?** *(Perfect timing factors)*
- ✅ **Proven Workflow**: The AI-first development patterns have been validated
- ✅ **Clean Structure**: Excellent folder organization and process flows already in place
- ✅ **Comprehensive Coverage**: All aspects of product development are documented
- ✅ **Real-World Tested**: Template has been used for actual feature development

---

## **💡 Solution Vision**

### **Target State**
```
Project-Agnostic AI-First Development Template
├── Variable substitution system ({{PROJECT_NAME}}, etc.)
├── Multiple domain examples (SaaS, E-commerce, Social, etc.)
├── Framework-agnostic patterns (not just MakerKit)
├── Configurable setup process
└── Preserved AI workflow excellence
```

### **Core Principle**
**Preserve Excellence, Enable Flexibility**: Keep the proven AI-first workflows intact while making all domain and tech-specific content adaptable to any project.

---

## **📋 Requirements** *(AI: Each REQ maps to implementation tasks)*

### **REQ-001: Template Variables - Variable Substitution System**
**As a** development team  
**I want** to easily customize the template for my specific project domain  
**So that** I can quickly get started without manual find-and-replace across dozens of files

**Acceptance Criteria**:
- [ ] All project-specific terms use variable syntax ({{PROJECT_NAME}}, {{DOMAIN}}, etc.)
- [ ] Variable reference documentation exists
- [ ] Example substitutions provided for 3+ different domains

### **REQ-002: Framework Agnostic - Tech Stack Flexibility**
**As a** development team using different frameworks  
**I want** the template to work with my chosen tech stack  
**So that** I can benefit from the AI-first workflow regardless of my technical choices

**Acceptance Criteria**:
- [ ] MakerKit-specific patterns moved to optional modules
- [ ] Generic database security patterns provided
- [ ] Framework-agnostic component organization documented
- [ ] Multiple tech stack examples provided

### **REQ-003: Context Links Resolution - Fix Reference Structure**
**As an** AI agent working with the template  
**I want** all context links to resolve properly  
**So that** I can access the documentation I need without broken references

**Acceptance Criteria**:
- [ ] All `@docs/` references either exist in template or are documented as external dependencies
- [ ] Relative path structure works from any project location
- [ ] Clear guidance on what teams need to create externally

---

## **🏗️ Technical Design**

### **Core Strategy**: Layered Abstraction with Examples

**Architecture Overview**:
```
Template Structure
├── Core AI Workflows (preserve exactly)
├── Variable System ({{PLACEHOLDER}} syntax)
├── Domain Examples (multiple business types)
├── Framework Modules (optional tech-specific patterns)
└── Setup Automation (configuration scripts)
```

### **Key Technical Principles** *(AI: Follow when implementing)*
1. **Preserve Proven Patterns**: Keep AI workflows and decision frameworks unchanged
2. **Variable Everything**: Any domain or project-specific content becomes a variable
3. **Example-Driven**: Show adaptation through concrete examples, not just theory

### **Implementation Approach**

#### **TECH-001: Variable Substitution System**
**Current State**: Hardcoded Campfire references throughout all files  
**Target State**: Configurable variables with clear documentation  
**Technical Approach**: Systematic find-replace with documented variable syntax

**Implementation Notes**:
- Use `{{VARIABLE_NAME}}` syntax for consistency
- Document all variables in root-level configuration file
- Provide validation script to check for missed substitutions

#### **TECH-002: Framework Abstraction Layer**
**Current State**: MakerKit/Supabase patterns assumed throughout  
**Target State**: Generic patterns with framework-specific modules  
**Technical Approach**: Extract tech-specific code into optional reference sections

**Implementation Notes**:
- Keep MakerKit example as one option among many
- Create generic equivalents for security, database, and component patterns
- Maintain backward compatibility for existing MakerKit users

---

## **🔄 Implementation Tasks**

### **Phase 1: Foundation Setup** *(Est: 4 hours)*

**TASK-001** 🤖 **[AI TASK]** - Create variable substitution system ⏳
- [ ] Identify all Campfire-specific terms needing variables
- [ ] Create `TEMPLATE_CONFIG.md` with variable definitions
- [ ] Document variable syntax and usage patterns
- **Files**: All markdown files, create TEMPLATE_CONFIG.md
- **Tests**: Script to validate all variables are documented

**TASK-002** 🤖 **[AI TASK]** - Fix context link structure ⏳
- [ ] Audit all `@docs/` and `@` references
- [ ] Create placeholder files for missing external dependencies
- [ ] Document external file requirements in setup guide
- **Dependencies**: TASK-001
- **Files**: All files with `@` references, create setup guide

### **Phase 2: Content Generalization** *(Est: 6 hours)*

**TASK-003** 🤖 **[AI TASK]** - Generalize domain-specific content ⏳
- [ ] Replace all outdoor gear terminology with variables
- [ ] Create multiple domain examples (SaaS, E-commerce, Social)
- [ ] Update user personas and value propositions to be template-based
- **Dependencies**: TASK-001, TASK-002
- **Files**: ai-context/, strategic/, features/template/

**TASK-004** 🤖 **[AI TASK]** - Abstract technical patterns ⏳
- [ ] Extract MakerKit-specific patterns to optional modules
- [ ] Create framework-agnostic equivalents
- [ ] Update ADRs to be template decisions rather than Campfire decisions
- **Dependencies**: TASK-003
- **Files**: reference/patterns/, decisions/technical/

### **Phase 3: Documentation & Validation** *(Est: 3 hours)*

**TASK-005** 🤖 **[AI TASK]** - Create setup and customization guide ⏳
- [ ] Write comprehensive template setup instructions
- [ ] Create example customization walkthroughs
- [ ] Add validation scripts for proper template usage
- **Dependencies**: TASK-004
- **Files**: Create SETUP_GUIDE.md, validation scripts

**TASK-006** 🤖 **[AI TASK]** - Update README and core documentation ⏳
- [ ] Rewrite README.md for template usage
- [ ] Update all core documentation files
- [ ] Add template versioning and changelog structure
- **Dependencies**: TASK-005
- **Files**: README.md, core documentation files

---

## **🧪 Testing Strategy**

### **Template Validation**
- [ ] Script validates all variables are documented
- [ ] No remaining Campfire-specific hardcoded references
- [ ] All context links resolve or are documented as external

### **Usage Testing**
- [ ] Template can be configured for 3 different domain examples
- [ ] AI agent can follow workflows without domain knowledge
- [ ] Setup process works from clean template copy

### **Documentation Testing**
- [ ] All setup instructions are complete and accurate
- [ ] Variable substitution examples work correctly
- [ ] External dependency requirements are clear

---

## **📊 Progress Tracking**

### **Current Status**: Complete - Template conversion finished
**Last Updated**: 2025-07-30 by AI Agent

### **Completed Tasks**
- ✅ **2025-07-30** - Initial analysis and task creation
- ✅ **2025-07-30** - Comprehensive plan development
- ✅ **2025-07-30** - TASK-001: Variable substitution system created
- ✅ **2025-07-30** - TASK-002: Context link structure fixed
- ✅ **2025-07-30** - TASK-003: Platform-specific content generalized
- ✅ **2025-07-30** - TASK-004: MakerKit patterns abstracted with framework adaptation
- ✅ **2025-07-30** - TASK-005: Setup guide with AI agent questionnaire created
- ✅ **2025-07-30** - TASK-006: Validation scripts and documentation completed

### **Active Blockers**
- None - Template conversion complete

### **Final Deliverables**
1. ✅ **Variable System**: `TEMPLATE_CONFIG.md` with comprehensive variable definitions
2. ✅ **External Docs Guide**: `EXTERNAL_DOCS_SETUP.md` for required project documentation
3. ✅ **Framework Adaptation**: `reference/patterns/framework-adaptation-guide.md`
4. ✅ **Setup Process**: `SETUP_GUIDE.md` with AI agent questionnaire
5. ✅ **Validation Tools**: `validate-template.js` and additional validation guidance

---

## **🔗 Links & References**

### **Current Template Structure**
- **Main README**: `README.md` (needs complete rewrite)
- **AI Context**: `ai-context/` (domain-specific, needs generalization)
- **Strategic Docs**: `strategic/` (outdoor gear specific)
- **Feature Template**: `features/template/feature-template.md` (excellent structure, wrong examples)

### **Key Files Requiring Updates**
- All files in `ai-context/` folder
- `strategic/vision.md` and `strategic/roadmap.md`
- `reference/patterns/ai-development-guide.md`
- All ADR files in `decisions/technical/`
- Main `README.md`

### **Template Dependencies**
- Variable system documentation
- Domain example library
- Framework abstraction modules
- Setup automation scripts

---

## **💡 Notes & Learnings**

### **Implementation Notes**
- The AI workflow patterns are excellent and should be preserved exactly
- The decision framework structure is valuable across all domains
- State-based feature management (backlog/active/done) is universally applicable

### **Template Strengths to Preserve**
- Mandatory AI agent workflow (6-step process)
- Comprehensive feature specification template
- Clear decision boundaries for AI agents
- Excellent progress tracking and documentation patterns

### **Areas for Improvement**
- Context links need to be self-contained or clearly documented as external
- Tech stack assumptions should be modular rather than hardcoded
- Domain examples should span multiple business types for broad applicability