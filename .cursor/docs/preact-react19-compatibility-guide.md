# Preact with React 19 Compatibility Guide

## What is Preact?

Preact is a lightweight alternative to React that maintains API compatibility while being significantly smaller (3KB vs 45KB). It's designed to be a drop-in replacement for React in most cases.

## Preact with React 19 Compatibility

### Key Features

1. **React API Compatibility**: Preact implements the React API, making it compatible with React 19
2. **Smaller Bundle Size**: 3KB vs React's 45KB
3. **Better Performance**: Faster rendering and smaller memory footprint
4. **Same JSX Syntax**: Uses the same JSX syntax as React
5. **Hooks Support**: Full support for React hooks
6. **TypeScript Support**: Excellent TypeScript integration

### React 19 Compatibility Status

✅ **Fully Compatible Features:**
- JSX syntax and components
- React hooks (useState, useEffect, useContext, etc.)
- React 19's new features (use, useOptimistic, useTransition)
- Context API
- Error boundaries
- Portals
- Suspense

⚠️ **Minor Differences:**
- Some internal implementation details
- Event handling (Preact uses native events)
- Synthetic events (Preact uses native events)

## Configuration Setup

### TypeScript Configuration

#### Preact Application
```json
{
  "extends": "@packages/typescript/preact.json"
}
```

#### Preact Library
```json
{
  "extends": "@packages/typescript/preact-library.json"
}
```

### Key Configuration Features

```json
{
  "compilerOptions": {
    "jsx": "react-jsx",
    "jsxImportSource": "preact",
    "paths": {
      "react": ["preact/compat"],
      "react-dom": ["preact/compat"]
    }
  }
}
```

## Usage Examples

### Basic Component
```tsx
// src/components/PreactComponent.tsx
import { useState, useEffect } from 'preact/hooks';

interface Props {
  title: string;
}

export default function PreactComponent({ title }: Props) {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    document.title = `${title} - Count: ${count}`;
  }, [title, count]);
  
  return (
    <div>
      <h2>{title}</h2>
      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>
    </div>
  );
}
```

### Using React 19 Features
```tsx
// src/components/React19Features.tsx
import { use, useOptimistic, useTransition } from 'preact/hooks';

interface User {
  id: string;
  name: string;
}

// Using React 19's 'use' hook
function UserProfile({ userPromise }: { userPromise: Promise<User> }) {
  const user = use(userPromise);
  
  return <div>Hello, {user.name}!</div>;
}

// Using React 19's optimistic updates
function TodoList() {
  const [todos, setTodos] = useState<string[]>([]);
  const [optimisticTodos, addOptimisticTodo] = useOptimistic(
    todos,
    (state, newTodo: string) => [...state, newTodo]
  );
  
  const [isPending, startTransition] = useTransition();
  
  const addTodo = async (todo: string) => {
    addOptimisticTodo(todo);
    startTransition(async () => {
      await saveTodo(todo);
      setTodos(prev => [...prev, todo]);
    });
  };
  
  return (
    <div>
      {optimisticTodos.map((todo, index) => (
        <div key={index} style={{ opacity: isPending ? 0.5 : 1 }}>
          {todo}
        </div>
      ))}
    </div>
  );
}
```

### Context and Hooks
```tsx
// src/context/ThemeContext.tsx
import { createContext, useContext, useState } from 'preact/hooks';

interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

export function ThemeProvider({ children }: { children: preact.ComponentChildren }) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  
  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };
  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
```

## Astro Integration

### Astro Configuration
```typescript
// astro.config.mjs
import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';

export default defineConfig({
  integrations: [
    preact({
      include: ['**/*.{tsx,jsx}'],
      exclude: ['**/*.react.{tsx,jsx}'] // Exclude React-specific files
    })
  ]
});
```

### Using Preact Components in Astro
```astro
---
// src/pages/index.astro
import PreactComponent from '../components/PreactComponent';
---

<html lang="en">
  <head>
    <title>Preact + Astro</title>
  </head>
  <body>
    <PreactComponent title="Hello from Preact!" client:load />
  </body>
</html>
```

## Package.json Dependencies

### For Preact Applications
```json
{
  "dependencies": {
    "preact": "^11.0.0",
    "preact-render-to-string": "^6.0.0"
  },
  "devDependencies": {
    "@preact/preset-vite": "^3.0.0",
    "@types/preact": "^10.0.0"
  }
}
```

### For Preact Libraries
```json
{
  "dependencies": {
    "preact": "^11.0.0"
  },
  "peerDependencies": {
    "preact": "^11.0.0"
  },
  "devDependencies": {
    "@types/preact": "^10.0.0"
  }
}
```

## Build Configuration

### Vite Configuration
```typescript
// vite.config.ts
import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';

export default defineConfig({
  plugins: [preact()],
  resolve: {
    alias: {
      'react': 'preact/compat',
      'react-dom': 'preact/compat'
    }
  }
});
```

### Rollup Configuration
```javascript
// rollup.config.js
import preact from '@preact/preset-vite';

export default {
  plugins: [preact()],
  external: ['preact'],
  output: {
    globals: {
      preact: 'Preact'
    }
  }
};
```

## Migration from React

### 1. Install Preact
```bash
pnpm add preact
pnpm add -D @preact/preset-vite @types/preact
```

### 2. Update Imports
```tsx
// Before (React)
import React, { useState, useEffect } from 'react';

// After (Preact)
import { useState, useEffect } from 'preact/hooks';
```

### 3. Update TypeScript Config
```json
{
  "extends": "@packages/typescript/preact.json"
}
```

### 4. Update Build Tools
```typescript
// vite.config.ts
import preact from '@preact/preset-vite';

export default defineConfig({
  plugins: [preact()]
});
```

## Performance Benefits

### Bundle Size Comparison
```
React 19: ~45KB (gzipped)
Preact:   ~3KB (gzipped)
```

### Memory Usage
- Preact uses less memory due to smaller runtime
- Faster initial render times
- Better performance on low-end devices

### Tree Shaking
- Preact is designed for better tree shaking
- Unused features are automatically removed
- Smaller production bundles

## Best Practices

### 1. Use Preact Hooks
```tsx
// ✅ Good: Use Preact hooks
import { useState, useEffect } from 'preact/hooks';

// ❌ Avoid: Import from 'react'
import { useState, useEffect } from 'react';
```

### 2. Leverage React Compatibility
```tsx
// ✅ Good: Use React-compatible APIs
import { createContext, useContext } from 'preact/hooks';

// ✅ Good: Use React 19 features
import { use, useOptimistic } from 'preact/hooks';
```

### 3. TypeScript Integration
```tsx
// ✅ Good: Use Preact types
import type { ComponentChildren } from 'preact';

interface Props {
  children: ComponentChildren;
}
```

### 4. Event Handling
```tsx
// ✅ Good: Use native events (Preact's default)
<button onClick={(e) => console.log(e.target)}>
  Click me
</button>

// ✅ Good: Use React-compatible events
import { createElement } from 'preact/compat';
```

## Troubleshooting

### Common Issues

1. **TypeScript Errors**
   ```bash
   # Install Preact types
   pnpm add -D @types/preact
   ```

2. **Build Errors**
   ```bash
   # Ensure Preact preset is configured
   # Check vite.config.ts or rollup.config.js
   ```

3. **Runtime Errors**
   ```tsx
   // Use Preact's error boundary
   import { ErrorBoundary } from 'preact/compat';
   ```

### Debug Commands
```bash
# Check Preact version
pnpm list preact

# Check bundle size
npx vite-bundle-analyzer

# Type check
pnpm type-check
```

## React 19 Feature Support

### ✅ Supported Features
- `use` hook for data fetching
- `useOptimistic` for optimistic updates
- `useTransition` for non-blocking updates
- Concurrent features
- Server components (with limitations)
- Streaming SSR

### ⚠️ Limitations
- Some React 19 experimental features may not work
- Server components require additional setup
- Some third-party React libraries may need compatibility layer

This setup provides a lightweight, performant alternative to React while maintaining full compatibility with React 19 features and APIs.
