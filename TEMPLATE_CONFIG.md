# AI-First Development Template Configuration

## Variable Substitution System

This template uses `{{VARIABLE_NAME}}` syntax for all customizable content. AI agents can easily parse and replace these variables during project setup.

## Core Project Variables

### **Project Identity**
- `{{PROJECT_NAME}}` - The name of your project (e.g., "Campfire", "TaskFlow", "ConnectHub")
- `{{PROJECT_NAME_LOWER}}` - Lowercase version of project name (e.g., "campfire", "taskflow", "connecthub")
- `{{PROJECT_DESCRIPTION}}` - Brief project description (e.g., "outdoor gear sharing platform", "task management system", "social networking app")
- `{{DOMAIN_TYPE}}` - Business domain type (e.g., "social platform", "productivity tool", "e-commerce site", "content management")
- `{{PLATFORM_TYPE}}` - Platform type ("web app", "mobile app", "desktop app", "API service", "full-stack application")

### **Target Users & Market**
- `{{PRIMARY_USERS}}` - Primary user type (e.g., "outdoor enthusiasts", "project managers", "content creators")
- `{{SECONDARY_USERS}}` - Secondary user type (e.g., "outdoor communities", "team leads", "marketing teams")
- `{{USER_AGE_RANGE}}` - Target age demographic (e.g., "25-45", "18-35", "all ages")
- `{{USER_BEHAVIOR_1}}` - Key user behavior pattern
- `{{USER_BEHAVIOR_2}}` - Secondary user behavior pattern
- `{{USER_PAIN_POINT_1}}` - Primary user pain point
- `{{USER_PAIN_POINT_2}}` - Secondary user pain point

### **Core Value Proposition**
- `{{CORE_VALUE_PROP}}` - Main value proposition (e.g., "community-driven gear discovery", "streamlined project tracking", "seamless content collaboration")
- `{{PRIMARY_BENEFIT}}` - Primary user benefit
- `{{SECONDARY_BENEFIT}}` - Secondary user benefit
- `{{UNIQUE_DIFFERENTIATOR}}` - What makes this project unique

### **Technical Stack**
- `{{FRAMEWORK}}` - Primary framework (e.g., "Next.js 15", "React Native", "Django", "Laravel")
- `{{DATABASE}}` - Database system (e.g., "Supabase (PostgreSQL)", "MySQL", "MongoDB", "Firebase")
- `{{AUTH_SYSTEM}}` - Authentication system (e.g., "MakerKit auth", "Firebase Auth", "Auth0", "custom JWT")
- `{{STYLING}}` - Styling approach (e.g., "Tailwind CSS + shadcn/ui", "Material-UI", "Bootstrap", "styled-components")
- `{{HOSTING}}` - Hosting/deployment (e.g., "Vercel", "AWS", "Heroku", "DigitalOcean")

### **Architecture Patterns**
- `{{ARCHITECTURE_PATTERN}}` - Main pattern (e.g., "Server Components first", "SPA with API", "Microservices", "Monolith")
- `{{SECURITY_PATTERN}}` - Security approach (e.g., "RLS-first security", "JWT-based auth", "Session-based auth")
- `{{DATA_PATTERN}}` - Data access pattern (e.g., "Multi-tenant with RLS", "Single-tenant", "API-first")

### **Business Context**
- `{{TEAM_SIZE}}` - Team size (e.g., "Solo developer + AI", "Small team (2-5)", "Large team (5+)")
- `{{DEVELOPMENT_PHASE}}` - Current phase (e.g., "MVP", "Growth", "Scale", "Maintenance")
- `{{BUSINESS_MODEL}}` - Revenue model (e.g., "Freemium SaaS", "One-time purchase", "Advertising", "Marketplace")
- `{{SUCCESS_METRIC_1}}` - Primary success metric
- `{{SUCCESS_METRIC_2}}` - Secondary success metric

### **Key Entities & Features**
- `{{MAIN_ENTITY}}` - Primary business entity (e.g., "Setup", "Task", "Post", "Product")
- `{{SECONDARY_ENTITY}}` - Secondary entity (e.g., "Gear Item", "Project", "Comment", "Order")
- `{{CORE_FEATURE_1}}` - Primary feature (e.g., "Setup creation & sharing", "Task management", "Content publishing")
- `{{CORE_FEATURE_2}}` - Secondary feature (e.g., "Community browsing", "Team collaboration", "Social interactions")
- `{{SOCIAL_FEATURE}}` - Social/community feature if applicable

### **Brand & Design**
- `{{BRAND_PERSONALITY}}` - Brand personality (e.g., "outdoor adventure", "professional productivity", "creative expression")
- `{{COLOR_SCHEME}}` - Color approach (e.g., "nature-inspired greens and browns", "corporate blues and grays", "vibrant and creative")
- `{{DESIGN_STYLE}}` - Design style (e.g., "mobile-first responsive", "desktop-focused", "native mobile")

## Framework-Specific Variables

### **MakerKit/Supabase (Default)**
- `{{MAKERKIT_VERSION}}` - MakerKit version (default: "v2.12.2+")
- `{{RLS_HELPER_FUNCTIONS}}` - RLS helper functions to use
- `{{ACCOUNT_STRUCTURE}}` - Account/tenant structure pattern

### **Alternative Framework Instructions**
When using a different framework, AI agents should:
1. Research the framework's best practices and patterns
2. Replace MakerKit-specific content with framework equivalents
3. Update security patterns to match framework conventions
4. Adapt component and data access patterns accordingly

## External Dependencies

### **Required External Documentation Structure**
Reference the recommended docs folder structure at: `/docs/README.md`

Key external files that teams need to create:
- `docs/context/project-overview.md` - AI assistant project context
- `docs/context/ai-assistant-guide.md` - Framework-specific AI guide
- `docs/context/current-focus.md` - Current development priorities
- `docs/dev/setup.md` - Development environment setup
- `docs/dev/architecture.md` - System architecture details
- `docs/dev/troubleshooting.md` - Common issues and solutions

## Validation Rules

AI agents should validate that:
1. All `{{VARIABLE_NAME}}` placeholders have been replaced
2. No Campfire-specific terminology remains in customized files
3. All context links resolve to existing files or are documented as external dependencies
4. Technical patterns match the chosen framework and architecture

## Template Customization Process

1. **Initial Setup**: AI agent asks user for core variable values
2. **Content Generation**: Replace all variables throughout template files
3. **Framework Adaptation**: Adapt technical patterns if not using MakerKit
4. **Validation**: Run validation checks to ensure complete customization
5. **Documentation**: Generate project-specific documentation references

## Example Variable Sets

### **SaaS Productivity Tool**
```
{{PROJECT_NAME}} = "TaskFlow"
{{PROJECT_DESCRIPTION}} = "team task management platform"
{{DOMAIN_TYPE}} = "productivity tool"
{{PRIMARY_USERS}} = "project managers"
{{CORE_VALUE_PROP}} = "streamlined team task tracking"
{{MAIN_ENTITY}} = "Task"
{{SECONDARY_ENTITY}} = "Project"
```

### **E-commerce Platform**
```
{{PROJECT_NAME}} = "ShopHub"
{{PROJECT_DESCRIPTION}} = "multi-vendor marketplace"
{{DOMAIN_TYPE}} = "e-commerce platform"
{{PRIMARY_USERS}} = "online shoppers"
{{CORE_VALUE_PROP}} = "curated product discovery"
{{MAIN_ENTITY}} = "Product"
{{SECONDARY_ENTITY}} = "Order"
```

### **Social Content Platform**
```
{{PROJECT_NAME}} = "CreativeShare"
{{PROJECT_DESCRIPTION}} = "creative content sharing platform"
{{DOMAIN_TYPE}} = "social platform"
{{PRIMARY_USERS}} = "content creators"
{{CORE_VALUE_PROP}} = "community-driven content discovery"
{{MAIN_ENTITY}} = "Post"
{{SECONDARY_ENTITY}} = "Comment"
```