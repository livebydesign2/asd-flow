# ADR-001: MakerKit Extension-Only Migration Strategy

**Status**: Accepted
**Date**: 2025-07-26
**Deciders**: Tyler, AI Development Team

## Context and Problem Statement

The Wildernest application was built on MakerKit v2.11.0 with significant customizations that prevented framework updates. The goal was to migrate to the latest MakerKit version while preserving all outdoor platform functionality and maintaining the ability to receive future framework updates.

## Decision Drivers

* **Update Compatibility**: Must maintain ability to receive MakerKit framework updates
* **Functionality Preservation**: All Wildernest outdoor platform features must be preserved
* **Development Velocity**: Migration approach should minimize risk and complexity
* **Maintenance Burden**: Solution should reduce long-term maintenance overhead

## Considered Options

* **Option 1**: Fork MakerKit and customize core schemas
* **Option 2**: Heavily modify MakerKit core to integrate Wildernest features
* **Option 3**: Extension-only approach - keep MakerKit core untouched, add Campfire extensions

## Decision Outcome

Chosen option: "Extension-only approach"

The migration will keep all MakerKit core schemas (00-17) completely untouched and add Campfire-specific functionality through extension schemas (18-24).

### Positive Consequences
* **Update Safety**: Can receive MakerKit updates without schema conflicts
* **Clear Separation**: Business logic clearly separated from framework core
* **Reduced Risk**: No risk of breaking MakerKit's established patterns
* **Proven Architecture**: Builds on MakerKit's multi-tenant foundation

### Negative Consequences
* **Additional Complexity**: Must work within MakerKit's constraints
* **Learning Curve**: Team must understand MakerKit patterns thoroughly
* **Limited Customization**: Cannot modify core MakerKit behavior

## Pros and Cons of the Options

### Option 1: Fork MakerKit
* Good, because allows complete customization freedom
* Good, because can integrate features at the core level
* Bad, because prevents receiving upstream updates
* Bad, because creates long-term maintenance burden
* Bad, because requires maintaining an entire framework fork

### Option 2: Heavy Core Modification
* Good, because enables tight integration with MakerKit features
* Good, because can leverage some MakerKit updates
* Bad, because makes updates risky and potentially breaking
* Bad, because creates merge conflicts with upstream changes
* Bad, because violates MakerKit's architectural principles

### Option 3: Extension-Only Approach
* Good, because maintains complete update compatibility
* Good, because leverages MakerKit's proven multi-tenant architecture
* Good, because provides clear upgrade path for future versions
* Good, because reduces maintenance burden significantly
* Bad, because requires working within MakerKit's patterns
* Bad, because may limit some customization possibilities

## Implementation Notes

### Schema Organization
- **MakerKit Core**: Schemas 00-17 remain completely untouched
- **Campfire Extensions**: Schemas 18-24 add outdoor platform functionality
- **RLS Integration**: Use MakerKit's helper functions (has_role_on_account, etc.)
- **Foreign Keys**: All Campfire tables reference accounts table from MakerKit core

### Extension Schemas
1. **18-campfire-enums.sql**: Outdoor category definitions
2. **19-campfire-storage.sql**: Setup and post media storage buckets
3. **20-campfire-platform-core.sql**: Core business tables (setups, gear, templates)
4. **21-campfire-modifications.sql**: Gear customization system
5. **22-campfire-reviews.sql**: Review and rating functionality
6. **23-campfire-content.sql**: Social features (posts, comments, reactions)
7. **24-campfire-messaging.sql**: Community messaging system

### Development Patterns
- **Server Components**: Use MakerKit's data loading patterns
- **RLS Policies**: Follow MakerKit's security patterns exactly
- **Component Library**: Use @kit/ui components exclusively
- **Server Actions**: Use enhanceAction wrapper for all mutations

## Links

* [MakerKit Documentation](https://makerkit.dev/docs)
* [Supabase RLS Guide](https://supabase.com/docs/guides/auth/row-level-security)
* [Next.js App Router Patterns](https://nextjs.org/docs/app)
* [TASK-006: Database Schema Implementation Plan](../migration/task-006-database-schema-implementation-plan.md) 