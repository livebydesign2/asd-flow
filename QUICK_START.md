# Quick Start: AI-First Development Template

## What This Template Provides

This is a **project-agnostic AI-first development template** that provides:

✅ **Proven AI agent workflows** with mandatory 6-step process  
✅ **Variable substitution system** for easy customization  
✅ **Framework flexibility** (MakerKit default, adaptable to others)  
✅ **State-based feature management** (backlog → active → done)  
✅ **Comprehensive documentation structure** for AI context  
✅ **External documentation guidance** for project-specific setup  

## 30-Second Setup

### 1. Customize the Template
```
Use AI agent with this prompt:

"I want to set up the AI-First Development Template for my project. 
Please help me customize it by asking me questions about my project 
and then replacing all the template variables with my specific information.

Start by asking me questions based on the variables defined in TEMPLATE_CONFIG.md."
```

### 2. Validate Customization
```bash
node validate-template.js
```

### 3. Set Up External Docs
- Follow `EXTERNAL_DOCS_SETUP.md`
- Create `docs/` folder structure
- Add AI context files

### 4. Clean Up Template Files
```bash
node cleanup-template-files.js
```
Removes setup files, keeps your customized project

## Key Files Overview

| File | Purpose |
|------|---------|
| `SETUP_GUIDE.md` | Complete customization instructions |
| `TEMPLATE_CONFIG.md` | All variable definitions |
| `EXTERNAL_DOCS_SETUP.md` | External documentation requirements |
| `validate-template.js` | Validation script |
| `reference/patterns/framework-adaptation-guide.md` | Non-MakerKit framework support |

## Core AI Workflow (Preserved)

Every AI agent working on features must follow:

1. **📊 Show Current Progress** - Print status and blockers
2. **🔍 Research & Understand** - Read context files and ask questions  
3. **📋 Create Todo List** - Use `TodoWrite` for multi-step tasks
4. **📝 Document Progress** - Update progress as you work
5. **🧪 Test Your Work** - Run validation and fix errors
6. **💾 Add & Commit** - Git commit with descriptive messages

## Template Features

### ✅ What's Been Made Generic
- All project-specific terminology → variables
- Domain references → configurable
- Framework patterns → adaptable
- Context links → external documentation structure
- Business models → template examples

### ✅ What's Been Preserved
- AI-first workflow excellence
- Feature specification templates
- Decision framework for AI agents
- Progress tracking systems
- Testing and quality standards

## Framework Support

**Default**: MakerKit + Supabase (ready to use)  
**Alternative**: Any framework (AI agents adapt using `framework-adaptation-guide.md`)

## Ready to Use For

- **Web applications** (React, Vue, Django, Laravel, etc.)
- **Mobile apps** (React Native, Flutter, etc.)
- **API services** (Express, FastAPI, etc.)
- **Full-stack applications** (any framework combination)

## Success Indicators

Template is ready when:
- [ ] `validate-template.js` passes
- [ ] All variables replaced with your project info
- [ ] External `docs/` folder created and populated
- [ ] Template cleanup completed (`cleanup-template-files.js`)
- [ ] AI agents can follow workflows without confusion
- [ ] First test feature created successfully

## Getting Started

1. **Read** `SETUP_GUIDE.md` for complete instructions
2. **Run** AI agent customization process
3. **Create** external documentation structure
4. **Test** with first feature
5. **Begin** AI-first development!

## Template Structure

```
template/
├── ai-context/                 # AI agent entry points
├── strategic/                  # Product vision & roadmap
├── features/                   # Feature management
│   ├── template/              # Feature spec template
│   ├── backlog/              # Planned features
│   ├── active/               # In development
│   └── done/                 # Completed features
├── decisions/                  # Architecture decisions
├── reference/                  # Development patterns
│   └── patterns/
│       ├── ai-development-guide.md
│       └── framework-adaptation-guide.md
└── [Setup & validation files]
```

This template enables **any team** to rapidly implement **AI-first development workflows** regardless of their chosen **framework**, **domain**, or **platform type**.

Ready to transform your development process? Start with `SETUP_GUIDE.md`!