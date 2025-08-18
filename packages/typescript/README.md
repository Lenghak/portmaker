# @packages/typescript

Shared TypeScript configuration for the Lenghak monorepo supporting multiple
frameworks.

## 📚 Documentation

For comprehensive documentation, see:

- **[Ultracite Setup Guide](../../.cursor/docs/ultracite-astro-multi-framework-setup.md)** -
  Complete guide for Ultracite with Astro and multiple frameworks
- **[Configuration Summary](../../.cursor/docs/ultracite-configuration-summary.md)** -
  Summary of current setup and features
- **[Preact React 19 Guide](../../.cursor/docs/preact-react19-compatibility-guide.md)** -
  Preact with React 19 compatibility
- **[Monorepo Architecture](../../.cursor/docs/README.md)** - Overview of all
  documentation

## Usage

### Base Configuration

```json
{
  "extends": "@packages/typescript/base.json"
}
```

### Astro Projects (Multi-Framework Support)

```json
{
  "extends": "@packages/typescript/astro.json"
}
```

### React Libraries

```json
{
  "extends": "@packages/typescript/react-library.json"
}
```

### React Projects

```json
{
  "extends": "@packages/typescript/react.json"
}
```

### Preact Projects (React 19 Compatible)

```json
{
  "extends": "@packages/typescript/preact.json"
}
```

### Preact Libraries

```json
{
  "extends": "@packages/typescript/preact-library.json"
}
```

### Vue Projects

```json
{
  "extends": "@packages/typescript/vue.json"
}
```

### Svelte Projects

```json
{
  "extends": "@packages/typescript/svelte.json"
}
```

### Qwik Projects

```json
{
  "extends": "@packages/typescript/qwik.json"
}
```

### Solid Projects

```json
{
  "extends": "@packages/typescript/solid.json"
}
```

## Available Configurations

- `base.json` - Base configuration with strict TypeScript settings
- `astro.json` - Configuration for Astro projects with multi-framework support
- `react-library.json` - Configuration for React library packages
- `react.json` - Configuration for React applications
- `preact.json` - Configuration for Preact applications (React 19 compatible)
- `preact-library.json` - Configuration for Preact library packages
- `vue.json` - Configuration for Vue applications
- `svelte.json` - Configuration for Svelte applications
- `qwik.json` - Configuration for Qwik applications
- `solid.json` - Configuration for Solid applications

## Features

- Strict type checking enabled
- Modern ES2022+ features
- Proper module resolution
- Path mapping support for all frameworks
- Framework-specific JSX configurations
- Optimized for monorepo structure
- Support for multiple frameworks in Astro

## Quick Start

1. **Install the package**: Already included in the monorepo
2. **Extend the config**: Use one of the configurations above
3. **Format your code**: Run `pnpm format` to format all files
4. **Check types**: Run `pnpm type-check` to verify TypeScript

For detailed setup instructions, see the
[Ultracite Setup Guide](../../.cursor/docs/ultracite-astro-multi-framework-setup.md).
