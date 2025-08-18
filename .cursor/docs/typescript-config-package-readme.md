# @packages/typescript

Shared TypeScript configuration for the Lenghak monorepo supporting multiple
frameworks.

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

### Angular Projects

```json
{
  "extends": "@packages/typescript/angular.json"
}
```

## Available Configurations

- `base.json` - Base configuration with strict TypeScript settings
- `astro.json` - Configuration for Astro projects with multi-framework support
- `react-library.json` - Configuration for React library packages
- `react.json` - Configuration for React applications
- `vue.json` - Configuration for Vue applications
- `svelte.json` - Configuration for Svelte applications
- `qwik.json` - Configuration for Qwik applications
- `solid.json` - Configuration for Solid applications
- `angular.json` - Configuration for Angular applications

## Features

- Strict type checking enabled
- Modern ES2022+ features
- Proper module resolution
- Path mapping support for all frameworks
- Framework-specific JSX configurations
- Optimized for monorepo structure
- Support for multiple frameworks in Astro

## Framework-Specific Features

### Astro (Multi-Framework)

- Supports React, Vue, Svelte, Qwik, Solid, and Angular components
- Proper JSX configuration for React components
- Type definitions for all supported frameworks

### React

- React JSX with automatic runtime
- Hooks and component path mapping
- Library and application configurations

### Vue

- Vue 3 composition API support
- SFC (Single File Component) support
- Composables path mapping

### Svelte

- Svelte component support
- Stores path mapping
- SvelteKit compatibility

### Qwik

- Qwik-specific JSX configuration
- Route-based path mapping
- Optimized for Qwik's resumability

### Solid

- SolidJS JSX configuration
- Stores and signals support
- Fine-grained reactivity optimized

### Angular

- Decorator support
- Service-based architecture
- Angular CLI compatibility
