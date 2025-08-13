# TypeScript in Monorepos: A Comprehensive Guide

## How TypeScript Works in Monorepos

### 1. Configuration Inheritance

TypeScript configurations in monorepos work through a hierarchy of `extends`:

```
Root tsconfig.json
├── packages/typescript/base.json (shared settings)
├── packages/typescript/astro.json (framework-specific)
└── apps/web/tsconfig.json (app-specific)
```

**Why this works:**

- Each level can override or extend settings from parent configs
- Shared settings are defined once in `base.json`
- Framework-specific settings are isolated
- App-specific settings can customize as needed

### 2. Path Mapping and Aliases

#### How Aliases Work

```json
{
  "compilerOptions": {
    "baseUrl": ".", // Base directory for resolving non-relative imports
    "paths": {
      "@/*": ["./src/*"], // Local package alias
      "@monorepo/*": ["../../packages/*/src"] // Cross-package alias
    }
  }
}
```

#### Alias Resolution Process

1. **TypeScript sees**: `import { Button } from '@/components/Button'`
2. **Resolves baseUrl**: `.` (current directory)
3. **Matches pattern**: `@/*` → `./src/*`
4. **Final path**: `./src/components/Button`

#### Why We Use Different Aliases

- **`@/*`**: Local package imports (doesn't conflict across packages)
- **`@monorepo/*`**: Cross-package imports (unique to avoid conflicts)

### 3. Multi-Config Architecture

#### Base Configuration (`base.json`)

```json
{
  "compilerOptions": {
    "strict": true,
    "target": "ESNext",
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"] // All packages inherit this
    }
  }
}
```

#### Framework Configurations

Each framework extends base and adds specific settings:

```json
// react.json
{
  "extends": ["./base.json"],
  "compilerOptions": {
    "jsx": "react-jsx" // React-specific
  }
}
```

#### Application Configuration

Apps extend framework configs and add monorepo paths:

```json
// apps/web/tsconfig.json
{
  "extends": "../../packages/typescript/astro.json",
  "compilerOptions": {
    "paths": {
      "@monorepo/*": ["../../packages/*/src"] // Cross-package imports
    }
  }
}
```

## Alias Management Strategy

### 1. Local Package Aliases (`@/*`)

**Purpose**: Import files within the same package
**Scope**: Package-local (no conflicts)
**Usage**: `import { utils } from '@/utils/helpers'`

### 2. Monorepo Aliases (`@monorepo/*`)

**Purpose**: Import from other packages in the monorepo
**Scope**: Cross-package (unique naming prevents conflicts)
**Usage**: `import { Button } from '@monorepo/ui/Button'`

### 3. Why This Prevents Conflicts

```
Package A: @/* → ./src/*
Package B: @/* → ./src/*  (same pattern, different baseUrl)
Root: @monorepo/* → ./packages/*/src  (unique pattern)
```

Each package has its own `baseUrl`, so `@/*` resolves relative to that package.

## TypeScript in Large Applications

### 1. Performance Optimization

#### Project References

```json
{
  "references": [
    { "path": "./packages/ui" },
    { "path": "./packages/utils" },
    { "path": "./apps/web" }
  ]
}
```

**Benefits:**

- Incremental compilation
- Parallel builds
- Faster type checking

#### Build Mode

```bash
# Build with project references
tsc --build --verbose

# Watch mode with references
tsc --build --watch
```

### 2. Type Safety Across Packages

#### Shared Types Package

```typescript
// packages/types/src/index.ts
export interface User {
  id: string;
  name: string;
  email: string;
}

export type ApiResponse<T> = {
  data: T;
  status: number;
};
```

#### Usage in Apps

```typescript
// apps/web/src/components/UserProfile.tsx
import type { User, ApiResponse } from "@monorepo/types";

const UserProfile = ({ user }: { user: User }) => {
  // Type-safe across the entire monorepo
};
```

### 3. Advanced Configuration Patterns

#### Conditional Compilation

```json
{
  "compilerOptions": {
    "types": ["node"],
    "lib": ["ESNext", "DOM"]
  },
  "ts-node": {
    "compilerOptions": {
      "module": "CommonJS"
    }
  }
}
```

#### Environment-Specific Configs

```json
// tsconfig.prod.json
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "removeComments": true,
    "sourceMap": false
  }
}
```

## Best Practices for Large Applications

### 1. Package Structure

```
packages/
├── types/          # Shared type definitions
├── ui/             # UI components
├── utils/          # Utility functions
├── api/            # API clients
└── config/         # Configuration utilities

apps/
├── web/            # Main web application
├── admin/          # Admin panel
└── mobile/         # Mobile app
```

### 2. Import Strategy

```typescript
// ✅ Good: Use aliases for clarity
import { Button } from "@/components/Button";
import { formatDate } from "@monorepo/utils";

// ❌ Bad: Relative imports across packages
import { Button } from "../../../packages/ui/Button";
```

### 3. Type Sharing

```typescript
// packages/types/src/api.ts
export interface ApiConfig {
  baseUrl: string;
  timeout: number;
}

// packages/api/src/client.ts
import type { ApiConfig } from "@monorepo/types";

export class ApiClient {
  constructor(private config: ApiConfig) {}
}
```

### 4. Build Optimization

#### Turbo Configuration

```json
// turbo.json
{
  "pipeline": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": ["dist/**"]
    },
    "type-check": {
      "dependsOn": ["^type-check"]
    }
  }
}
```

#### Package.json Scripts

```json
{
  "scripts": {
    "build": "turbo run build",
    "type-check": "turbo run type-check",
    "dev": "turbo run dev --parallel"
  }
}
```

## Common Patterns and Solutions

### 1. Circular Dependencies

```typescript
// ❌ Problem: Circular dependency
// packages/ui/src/Button.tsx
import { useTheme } from "@monorepo/theme";

// packages/theme/src/index.ts
import { Button } from "@monorepo/ui";

// ✅ Solution: Extract shared logic
// packages/shared/src/theme.ts
export interface Theme {
  colors: Record<string, string>;
}
```

### 2. Type Augmentation

```typescript
// packages/types/src/global.d.ts
declare global {
  interface Window {
    __APP_CONFIG__: AppConfig;
  }
}

export {};
```

### 3. Module Resolution

```json
{
  "compilerOptions": {
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "verbatimModuleSyntax": true
  }
}
```

## Performance Tips

### 1. Use Project References

- Enable incremental compilation
- Reduce build times significantly
- Enable parallel builds

### 2. Optimize Type Checking

```json
{
  "compilerOptions": {
    "skipLibCheck": true,
    "noEmit": true,
    "incremental": true
  }
}
```

### 3. Leverage Turbo

- Parallel execution
- Caching
- Incremental builds

### 4. Monitor Bundle Size

```bash
# Analyze bundle size
npx bundle-analyzer dist/stats.json

# Check for duplicate dependencies
npx pnpm why react
```

This architecture provides a scalable, maintainable, and performant TypeScript setup for large monorepo applications.
