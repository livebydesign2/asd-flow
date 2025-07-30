# External Documentation Setup Guide

## Overview

This template references external documentation files that your project team needs to create. These files provide project-specific context that AI agents require for effective development work.

## Required External Documentation Structure

Your project should have a `docs/` folder in the root directory with the following structure:

```
your-project/
├── docs/
│   ├── README.md                    # Main documentation index
│   ├── context/                     # AI-optimized context files
│   │   ├── project-overview.md      # Primary AI entry point
│   │   ├── ai-assistant-guide.md    # Framework-specific AI guide
│   │   └── current-focus.md         # Current development priorities
│   ├── dev/                         # Developer documentation
│   │   ├── setup.md                 # Development environment setup
│   │   ├── architecture.md          # System architecture details
│   │   ├── troubleshooting.md       # Common issues and solutions
│   │   ├── error-handling.md        # Error handling patterns
│   │   ├── system-integration.md    # Integration patterns
│   │   ├── social-features-reference.md  # Community features (if applicable)
│   │   └── framework-update-process.md   # Safe framework update process
│   ├── brand/                       # Brand assets and design
│   │   └── colors.md                # Brand color palette and guidelines
│   ├── testing/                     # Testing documentation
│   │   └── [project-name]-e2e-integration.md  # E2E testing setup
│   └── product/                     # Product documentation (optional)
│       ├── requirements/            # Product requirements
│       ├── specifications/          # Technical specifications
│       ├── research/                # User research and analysis
│       └── planning/                # Roadmaps and planning
└── [this template folder structure]
```

## Critical Files for AI Agents

### 1. `docs/context/project-overview.md` (REQUIRED)

This is the primary entry point for AI agents. Template:

```markdown
# {{PROJECT_NAME}} - Project Overview for AI Assistants

## Project Identity
- **Name**: {{PROJECT_NAME}}
- **Version**: {{PROJECT_VERSION}}
- **Type**: {{PLATFORM_TYPE}}
- **Domain**: {{DOMAIN_TYPE}}

## Current Architecture
- **Primary Language**: TypeScript
- **Framework**: {{FRAMEWORK}}
- **Database**: {{DATABASE}}
- **Authentication**: {{AUTH_SYSTEM}}
- **Styling**: {{STYLING}}
- **Hosting**: {{HOSTING}}

## Project Status
- **Phase**: {{DEVELOPMENT_PHASE}}
- **Team Size**: {{TEAM_SIZE}}
- **Last Major Update**: [Date and description]

## Key Architectural Patterns
- {{ARCHITECTURE_PATTERN}}
- {{SECURITY_PATTERN}}
- {{DATA_PATTERN}}

## Critical Constraints
- **Performance**: {{SUCCESS_METRIC_1}}
- **Security**: {{SECURITY_PATTERN}} requirements
- **Technical Debt**: [Known issues or planned refactoring]

## Quick Navigation
- Setup Instructions: `docs/dev/setup.md`
- Architecture Details: `docs/dev/architecture.md`
- Current Focus: `docs/context/current-focus.md`
```

### 2. `docs/context/ai-assistant-guide.md` (REQUIRED)

Framework-specific patterns and conventions:

```markdown
# AI Assistant Guide for {{PROJECT_NAME}}

## Project Vocabulary & Keywords

### Core Technologies
- **{{FRAMEWORK}}** - [Brief description and version]
- **{{DATABASE}}** - [Database details and patterns]
- **{{AUTH_SYSTEM}}** - [Authentication approach]

### Domain-Specific Terms
- **{{MAIN_ENTITY}}** - [Primary business entity definition]
- **{{SECONDARY_ENTITY}}** - [Secondary entity definition]
- [Add project-specific terminology]

## Common Development Patterns

### File Organization
- [Your project's file structure patterns]
- [Component organization]
- [Server/client code separation]

### Code Style Guidelines
- [Linting setup]
- [Testing patterns]
- [Naming conventions]

## Where to Find Information
| Need | Location |
|------|----------|
| Environment setup | `docs/dev/setup.md` |
| System architecture | `docs/dev/architecture.md` |
| Troubleshooting | `docs/dev/troubleshooting.md` |
```

### 3. `docs/context/current-focus.md` (REQUIRED)

Keep this updated with current development priorities:

```markdown
# Current Development Focus - {{PROJECT_NAME}}

**Last Updated**: [Date]

## Active Sprint/Iteration
- **Goal**: [Primary objective]
- **Priority Features**: 
  - [Feature 1]
  - [Feature 2]

## Recent Changes
- [Date]: [Major change description]

## Context for AI Assistants
When working on current tasks, prioritize:
1. [Current priority 1]
2. [Current priority 2]

Avoid or defer:
- [Things to avoid changing right now]
```

### 4. `docs/dev/setup.md` (REQUIRED)

Complete development environment setup instructions:

```markdown
# Development Environment Setup - {{PROJECT_NAME}}

## Prerequisites
- Node.js {{NODE_VERSION}}
- {{DATABASE}} setup
- [Other prerequisites]

## Installation Steps
1. Clone repository
2. Install dependencies: `npm install`
3. Environment configuration
4. Database setup
5. Start development server

## Verification
- [How to verify setup works]
- [Test commands to run]
```

## Framework-Specific Adaptations

### If Using MakerKit/Supabase (Default)
- Keep the existing patterns in `reference/patterns/ai-development-guide.md`
- Follow RLS-first security patterns
- Use account-based multi-tenancy

### If Using Different Framework
AI agents should:
1. Research the chosen framework's best practices
2. Replace MakerKit-specific patterns with framework equivalents
3. Update security patterns to match framework conventions
4. Adapt component and data access patterns accordingly

## Template Variables to Replace

When setting up your external docs, replace these template variables:

- `{{PROJECT_NAME}}` → Your project name
- `{{PROJECT_VERSION}}` → Current version
- `{{PLATFORM_TYPE}}` → "web app", "mobile app", etc.
- `{{DOMAIN_TYPE}}` → Your business domain
- `{{FRAMEWORK}}` → Your chosen framework
- `{{DATABASE}}` → Your database system
- `{{TEAM_SIZE}}` → Your team size
- `{{DEVELOPMENT_PHASE}}` → Current development phase

See `TEMPLATE_CONFIG.md` for complete variable list.

## Validation

After creating your external docs:

1. Run `node validate-template.js` to check for missing references
2. Verify AI agents can find all referenced documentation
3. Test that context links resolve properly

## Example Reference Implementation

For a complete example of this documentation structure, see:
`/Users/tylerbarnard/Developer/Apps/campfire/docs/`

This shows how a real project implements the recommended structure with actual content and patterns.

## Maintenance

Keep these files updated:
- `docs/context/current-focus.md` - Update weekly or when priorities change
- `docs/context/project-overview.md` - Update after major architecture changes
- Framework-specific guides - Update when development patterns evolve