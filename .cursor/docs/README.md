# Lenghak Monorepo Documentation

This directory contains comprehensive documentation for the Lenghak monorepo setup, configuration, and best practices.

## 📚 Documentation Index

### 🚀 Ultracite & Biome Configuration

- **[ultracite-astro-multi-framework-setup.md](./ultracite-astro-multi-framework-setup.md)** - Complete guide for using Ultracite with Astro and multiple frameworks (React, Vue, Svelte, Qwik, Solid, Angular)
- **[ultracite-configuration-summary.md](./ultracite-configuration-summary.md)** - Summary of current Ultracite setup, commands, and features

### 🔧 TypeScript Configuration

- **[typescript-config-package-readme.md](./typescript-config-package-readme.md)** - Documentation for the shared TypeScript configuration package

### ⚡ Preact & React 19

- **[preact-react19-compatibility-guide.md](./preact-react19-compatibility-guide.md)** - Complete guide for Preact with React 19 compatibility, performance benefits, and migration strategies
- **[preact-quick-reference.md](./preact-quick-reference.md)** - Quick setup and usage reference for Preact

### 📋 Rules & Guidelines

- **[../rules/ultracite.mdc](../rules/ultracite.mdc)** - Ultracite rules and coding standards
- **[../rules/monorepo.mdc](../rules/monorepo.mdc)** - TypeScript monorepo architecture and best practices

## 🎯 Quick Reference

### Ultracite Commands

```bash
# Format all files
pnpm format

# Format with unsafe fixes
pnpm format:unsafe

# Lint all files
pnpm lint

# Check formatting without applying
pnpm format:check
```

### TypeScript Configs

- `packages/typescript/base.json` - Base configuration
- `packages/typescript/astro.json` - Astro-specific config
- `packages/typescript/react.json` - React-specific config
- `packages/typescript/preact.json` - Preact-specific config
- `packages/typescript/preact-library.json` - Preact library config
- `packages/typescript/vue.json` - Vue-specific config
- `packages/typescript/svelte.json` - Svelte-specific config
- `packages/typescript/qwik.json` - Qwik-specific config
- `packages/typescript/solid.json` - Solid-specific config

### Supported Frameworks

- ✅ Astro (multi-framework support)
- ✅ React
- ✅ Preact (React 19 compatible)
- ✅ Vue
- ✅ Svelte
- ✅ Qwik
- ✅ Solid
- ✅ Angular

## 🔄 Maintenance

This documentation should be updated when:

- Adding new frameworks
- Changing configuration
- Updating dependencies
- Modifying build processes

## 📖 Usage

These documents serve as:

- **Onboarding guides** for new team members
- **Reference material** for configuration details
- **Best practices** for monorepo development
- **Troubleshooting** guides for common issues
