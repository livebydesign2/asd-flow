# AI-First Template Setup Guide

## Overview

This guide helps you customize the AI-First Development Template for your specific project. An AI agent will ask you questions to gather the necessary information and automatically customize all template files.

## Prerequisites

Before starting the setup process:

1. **Clone or copy this template** to your project directory
2. **Review the template structure** by reading `README.md`
3. **Prepare project information** (have your project details ready)
4. **Decide on your tech stack** (or use the default MakerKit + Supabase)

## Setup Process

### Phase 1: AI Agent Template Customization

Use this prompt with an AI agent to begin customization:

```
I want to set up the AI-First Development Template for my project. Please help me customize it by asking me questions about my project and then replacing all the template variables with my specific information.

Start by asking me questions based on the variables defined in TEMPLATE_CONFIG.md. Ask them in logical groups, and after each group, show me what the key template files will look like with my information.

Begin with the Project Identity questions.
```

### Phase 2: External Documentation Setup

After template customization, create external documentation:

1. **Create docs folder structure** (see `EXTERNAL_DOCS_SETUP.md`)
2. **Set up core context files** for AI assistants
3. **Configure development environment documentation**
4. **Validate all links and references**

### Phase 3: Validation and Testing

1. **Run template validation**: `node validate-template.js`
2. **Test AI agent workflows** with a sample feature
3. **Verify all documentation links work**
4. **Update project-specific information**

## AI Agent Questionnaire

### **Project Identity Questions**

```
AI Agent should ask:

1. What is your project name? (e.g., "TaskFlow", "ShopHub", "ConnectHub")
2. Provide a brief description of your project (e.g., "task management platform", "e-commerce marketplace")
3. What type of platform are you building?
   - Web application
   - Mobile app (React Native/Flutter)
   - Desktop application
   - API service
   - Full-stack application
4. What business domain best describes your project?
   - Social platform
   - Productivity tool
   - E-commerce site
   - Content management
   - Healthcare platform
   - Educational platform
   - Financial services
   - [Other - specify]
```

### **Target Users & Market Questions**

```
AI Agent should ask:

5. Who are your primary users? (e.g., "project managers", "small business owners", "content creators")
6. Who are your secondary users? (e.g., "team members", "customers", "administrators") 
7. What age range is your target demographic? (e.g., "25-45", "18-35", "all ages")
8. What are your users' main behaviors or characteristics?
   - First behavior/characteristic
   - Second behavior/characteristic
9. What are the main pain points your users face?
   - Primary pain point
   - Secondary pain point
```

### **Core Value & Features Questions**

```
AI Agent should ask:

10. What is your core value proposition? (e.g., "streamlined project tracking", "community-driven content sharing")
11. What makes your project unique compared to competitors?
12. What is your main business entity/concept? (e.g., "Task", "Product", "Post", "Course")
13. What is your secondary business entity? (e.g., "Project", "Order", "Comment", "Lesson")
14. What is your primary feature? (e.g., "Task creation & management", "Product catalog browsing")
15. What is your secondary feature? (e.g., "Team collaboration", "Social interactions")
16. Do you need social/community features? If yes, what type? (e.g., "likes and comments", "user following", "messaging")
```

### **Technical Stack Questions**

```
AI Agent should ask:

17. Are you using the default MakerKit + Supabase stack? (Yes/No)
    
    If YES:
    - What version of MakerKit? (default: "v2.12.2+")
    - Continue with MakerKit patterns
    
    If NO:
    18. What is your primary framework? (e.g., "Django", "Laravel", "Express.js", "React Native")
    19. What database are you using? (e.g., "PostgreSQL", "MySQL", "MongoDB")
    20. What authentication system? (e.g., "JWT", "Firebase Auth", "Auth0", "Custom")
    21. What styling approach? (e.g., "Tailwind CSS", "Material-UI", "Bootstrap", "styled-components")
    22. What hosting/deployment platform? (e.g., "Vercel", "AWS", "Heroku", "DigitalOcean")

23. What is your primary architectural pattern? 
    - Server Components first
    - SPA with API
    - Microservices
    - Monolithic
    - JAMstack
    
24. What security pattern will you use?
    - RLS-first security (database-level)
    - JWT-based authentication
    - Session-based authentication
    - Custom middleware

25. What data access pattern?
    - Multi-tenant with RLS
    - Single-tenant
    - API-first
    - Direct database access
```

### **Business Context Questions**

```
AI Agent should ask:

26. What is your team size?
    - Solo developer + AI
    - Small team (2-5 people)
    - Large team (5+ people)

27. What development phase are you in?
    - MVP/Planning
    - Active development
    - Growth/scaling
    - Maintenance

28. What is your business model?
    - Freemium SaaS
    - One-time purchase
    - Subscription service
    - Advertising-based
    - Marketplace/commission
    - [Other - specify]

29. What are your primary success metrics?
    - Monthly active users
    - Revenue growth
    - User engagement
    - Conversion rate
    - [Other - specify]

30. What are your secondary success metrics?
```

### **Design & Brand Questions**

```
AI Agent should ask:

31. How would you describe your brand personality? (e.g., "professional and trustworthy", "creative and energetic", "minimal and elegant")

32. What color scheme fits your brand?
    - Professional (blues, grays)
    - Creative (vibrant, colorful)
    - Natural (greens, earth tones)
    - Minimal (black, white, accent)
    - [Other - specify]

33. What design style do you prefer?
    - Mobile-first responsive
    - Desktop-focused
    - Native mobile
    - Progressive web app
```

## AI Agent Customization Script

After gathering answers, the AI agent should:

### **Step 1: Variable Replacement**
```
Replace all {{VARIABLE_NAME}} placeholders throughout the template with the user's specific information:

- Read all .md files in the template
- Replace variables with actual values
- Maintain proper formatting and context
- Update file names if they contain variables (e.g., {{PROJECT_NAME_LOWER}}-e2e-integration.md)
```

### **Step 2: Framework Adaptation** (if not using MakerKit)
```
If user chose a different framework:

1. Update ai-context/implementation-rules.md with framework-specific patterns
2. Replace MakerKit references in reference/patterns/ai-development-guide.md
3. Update ADR files to reflect chosen architecture decisions
4. Add framework-specific setup instructions
5. Reference framework-adaptation-guide.md for detailed patterns
```

### **Step 3: Content Review**
```
Show the user preview of key customized files:

1. ai-context/project-brief.md (core project identity)
2. strategic/vision.md (product vision with their specifics)
3. strategic/roadmap.md (roadmap with their features)
4. README.md (customized overview)

Ask for confirmation before proceeding.
```

### **Step 4: Validation**
```
Run automated checks:

1. Verify all variables have been replaced
2. Check for any remaining Campfire-specific references
3. Validate that technical patterns match chosen framework
4. Ensure all internal links work properly
```

### **Step 5: Cleanup Instructions**
```
After validation passes and external docs are set up:

1. Inform user about cleanup process
2. Recommend running `node cleanup-template-files.js`
3. Explain that template setup files will be removed
4. Confirm that customized project files remain untouched
5. Suggest backing up the template before cleanup if desired
```

## Post-Setup Tasks

After AI agent completes customization:

### **1. External Documentation Setup**
- Follow `EXTERNAL_DOCS_SETUP.md` to create required docs folder
- Create the critical AI context files
- Set up framework-specific documentation

### **2. Template Cleanup** ⚠️ **IMPORTANT**
Once your template is fully customized and external docs are set up:

```bash
# Clean up template-specific files
node cleanup-template-files.js
```

This removes setup files like:
- `TEMPLATE_CONFIG.md`
- `SETUP_GUIDE.md` 
- `EXTERNAL_DOCS_SETUP.md`
- `QUICK_START.md`
- `validate-template.js`
- And other template-only files

**Your customized project files remain untouched!**

### **3. Development Environment**
- Set up your chosen tech stack
- Configure database and authentication
- Install required dependencies
- Test basic functionality

### **4. AI Agent Testing**
- Create a test feature using the feature template
- Verify AI agents can follow the workflows
- Test the todo_write integration
- Validate the mandatory 6-step process

### **5. Team Onboarding**
- Share the customized template with your team
- Walk through the AI-first workflows
- Set up external documentation access
- Train on the feature development process

## Troubleshooting

### **Common Issues**

**"Variables not replaced"**
- Run `node validate-template.js` to find missed variables
- Check TEMPLATE_CONFIG.md for complete variable list
- Manually replace any remaining placeholders

**"Context links broken"**
- Ensure external docs folder structure is created
- Check that all referenced files exist
- Update links to match your project structure

**"Framework patterns don't match"**
- Review `reference/patterns/framework-adaptation-guide.md`
- Update implementation-rules.md with framework-specific patterns
- Consider getting human review for complex framework migrations

**"AI agent confused by template"**
- Ensure all variables are properly replaced
- Check that domain-specific terminology is consistent
- Verify external documentation is complete

### **Validation Commands**

```bash
# Check for unreplaced variables and broken links
node validate-template.js

# Verify file structure
ls -la ai-context/
ls -la strategic/
ls -la features/
ls -la decisions/

# Test AI agent workflow with sample feature
# (Create a simple test feature following the template)
```

## Success Criteria

Your template setup is complete when:

- [ ] All `{{VARIABLE_NAME}}` placeholders have been replaced
- [ ] `node validate-template.js` passes without errors
- [ ] External documentation structure is created and populated
- [ ] AI agents can successfully follow the mandatory workflow
- [ ] Team members understand the AI-first development process
- [ ] First test feature has been created using the template
- [ ] All technical patterns match your chosen framework
- [ ] Documentation links resolve correctly

## Getting Help

If you encounter issues during setup:

1. **Check the validation script**: `node validate-template.js`
2. **Review framework adaptation guide**: `reference/patterns/framework-adaptation-guide.md`
3. **Verify external docs setup**: `EXTERNAL_DOCS_SETUP.md`
4. **Test with a simple feature**: Create a basic feature using the template
5. **Consider human review**: For complex framework adaptations or security patterns

The goal is to have a template that enables AI agents to work effectively with your specific project context while maintaining the proven AI-first development workflows.