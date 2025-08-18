# Preact Quick Reference

## 🚀 Quick Setup

### Install Dependencies

```bash
# For Preact applications
pnpm add preact preact-render-to-string
pnpm add -D @preact/preset-vite @types/preact

# For Preact libraries
pnpm add preact
pnpm add -D @types/preact
```

### TypeScript Configuration

```json
// For applications
{
  "extends": "@packages/typescript/preact.json"
}

// For libraries
{
  "extends": "@packages/typescript/preact-library.json"
}
```

### Vite Configuration

```typescript
// vite.config.ts
import { defineConfig } from "vite";
import preact from "@preact/preset-vite";

export default defineConfig({
  plugins: [preact()],
  resolve: {
    alias: {
      react: "preact/compat",
      "react-dom": "preact/compat",
    },
  },
});
```

## 📝 Component Examples

### Basic Component

```tsx
import { useState } from "preact/hooks";

export default function Counter() {
  const [count, setCount] = useState(0);

  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
}
```

### React 19 Features

```tsx
import { use, useOptimistic, useTransition } from "preact/hooks";

// use hook for data fetching
function UserProfile({ userPromise }) {
  const user = use(userPromise);
  return <div>Hello, {user.name}!</div>;
}

// Optimistic updates
function TodoList() {
  const [todos, setTodos] = useState([]);
  const [optimisticTodos, addOptimisticTodo] = useOptimistic(
    todos,
    (state, newTodo) => [...state, newTodo]
  );

  const [isPending, startTransition] = useTransition();

  const addTodo = async (todo) => {
    addOptimisticTodo(todo);
    startTransition(async () => {
      await saveTodo(todo);
      setTodos((prev) => [...prev, todo]);
    });
  };
}
```

## 🔧 Astro Integration

### Astro Config

```typescript
// astro.config.mjs
import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";

export default defineConfig({
  integrations: [
    preact({
      include: ["**/*.{tsx,jsx}"],
      exclude: ["**/*.react.{tsx,jsx}"],
    }),
  ],
});
```

### Using in Astro

```astro
---
import PreactComponent from "../components/PreactComponent";
---

<PreactComponent title="Hello from Preact!" client:load />
```

## 📦 Package.json Examples

### Application

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

### Library

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

## 🎯 Key Benefits

- **Bundle Size**: 3KB vs React's 45KB
- **Performance**: Faster rendering and smaller memory footprint
- **React 19 Compatible**: Full support for React 19 features
- **TypeScript**: Excellent TypeScript integration
- **Same JSX**: Uses the same JSX syntax as React

## 🔄 Migration from React

1. **Install Preact**: `pnpm add preact`
2. **Update Imports**: `import { useState } from 'preact/hooks'`
3. **Update Config**: Use `@packages/typescript/preact.json`
4. **Update Build**: Add `@preact/preset-vite` to Vite config

## 📚 Documentation

- **[Complete Guide](./preact-react19-compatibility-guide.md)** - Full Preact +
  React 19 guide
- **[Ultracite Setup](./ultracite-astro-multi-framework-setup.md)** - Ultracite
  with Preact
- **[TypeScript Config](./typescript-config-package-readme.md)** - TypeScript
  configurations
