# Ultracite with Astro: A Comprehensive Guide

## What is Ultracite?

Ultracite is an AI-ready formatter and linter that uses Biome under the hood to
provide:

- **Zero configuration required** - Works out of the box
- **Subsecond performance** - Lightning-fast formatting and linting
- **Maximum type safety** - Strict TypeScript rules
- **AI-friendly code generation** - Optimized for AI assistants

## Ultracite with Astro

### How It Works

Ultracite extends Biome's capabilities and works seamlessly with Astro projects:

1. **Astro Files (.astro)**: Ultracite can format and lint Astro component files
2. **Framework Components**: Supports React, Preact, Vue, Svelte, Qwik, Solid,
   and Angular components within Astro
3. **TypeScript/JavaScript**: Full support for TS/JS files in your Astro project
4. **CSS/SCSS**: Formats stylesheets
5. **JSON/JSONC**: Handles configuration files

### Current Configuration

```jsonc
// biome.jsonc
{
  "$schema": "https://biomejs.dev/schemas/latest/schema.json",
  "extends": ["ultracite"],
}
```

This simple configuration provides:

- Strict TypeScript rules
- Accessibility (a11y) enforcement
- Code quality standards
- Consistent formatting
- Framework-specific optimizations

## Framework Support in Astro

### React Components

```tsx
// src/components/ReactComponent.tsx
import { useState } from "react";

interface Props {
  title: string;
}

export default function ReactComponent({ title }: Props) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>{title}</h2>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
    </div>
  );
}
```

### Preact Components (React 19 Compatible)

```tsx
// src/components/PreactComponent.tsx
import { useState, useEffect } from "preact/hooks";

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
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
    </div>
  );
}
```

### Using React 19 Features with Preact

```tsx
// src/components/React19Features.tsx
import { use, useOptimistic, useTransition } from "preact/hooks";

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
      setTodos((prev) => [...prev, todo]);
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

### Vue Components

```vue
<!-- src/components/VueComponent.vue -->
<template>
  <div>
    <h2>{{ title }}</h2>
    <button @click="increment">Count: {{ count }}</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

interface Props {
  title: string;
}

const props = defineProps<Props>();
const count = ref(0);

const increment = () => {
  count.value++;
};
</script>
```

### Svelte Components

```svelte
<!-- src/components/SvelteComponent.svelte -->
<script lang="ts">
  interface Props {
    title: string;
  }

  export let title: string;
  let count = 0;

  function increment() {
    count++;
  }
</script>

<div>
  <h2>{title}</h2>
  <button on:click={increment}>Count: {count}</button>
</div>
```

### Qwik Components

```tsx
// src/components/QwikComponent.tsx
import { component$, useSignal } from "@builder.io/qwik";

interface Props {
  title: string;
}

export default component$<Props>(({ title }) => {
  const count = useSignal(0);

  return (
    <div>
      <h2>{title}</h2>
      <button onClick$={() => count.value++}>Count: {count.value}</button>
    </div>
  );
});
```

### Solid Components

```tsx
// src/components/SolidComponent.tsx
import { createSignal, Component } from "solid-js";

interface Props {
  title: string;
}

const SolidComponent: Component<Props> = (props) => {
  const [count, setCount] = createSignal(0);

  return (
    <div>
      <h2>{props.title}</h2>
      <button onClick={() => setCount(count() + 1)}>Count: {count()}</button>
    </div>
  );
};

export default SolidComponent;
```

### Angular Components

```typescript
// src/components/angular-component.ts
import { Component, Input } from "@angular/core";

@Component({
  selector: "app-angular-component",
  template: `
    <div>
      <h2>{{ title }}</h2>
      <button (click)="increment()">Count: {{ count }}</button>
    </div>
  `,
})
export class AngularComponent {
  @Input() title!: string;
  count = 0;

  increment() {
    this.count++;
  }
}
```

## Using Ultracite Commands

### Basic Formatting

```bash
# Format all files in the project
npx ultracite format

# Format specific files
npx ultracite format src/components/MyComponent.tsx

# Format with unsafe fixes (applies more aggressive fixes)
npx ultracite format --unsafe
```

### Linting

```bash
# Check for issues without fixing
npx ultracite lint

# Check specific files
npx ultracite lint src/pages/index.astro
```

### Integration with Package Managers

#### PNPM (Current Setup)

```json
{
  "scripts": {
    "format": "ultracite format",
    "lint": "ultracite lint",
    "format:unsafe": "ultracite format --unsafe"
  }
}
```

#### Bun (Alternative)

```json
{
  "scripts": {
    "format": "bun x ultracite format",
    "lint": "bun x ultracite lint"
  }
}
```

## Monorepo Configuration

### Root Level

```jsonc
// biome.jsonc (root)
{
  "$schema": "https://biomejs.dev/schemas/latest/schema.json",
  "extends": ["ultracite"],
}
```

### Package Level (Optional)

Individual packages can have their own configurations:

```jsonc
// packages/ui/biome.jsonc
{
  "$schema": "https://biomejs.dev/schemas/latest/schema.json",
  "extends": ["ultracite"],
  "files": {
    "ignore": ["dist/**", "node_modules/**"],
  },
}
```

### App Level (Optional)

```jsonc
// apps/web/biome.jsonc
{
  "$schema": "https://biomejs.dev/schemas/latest/schema.json",
  "extends": ["ultracite"],
  "files": {
    "ignore": [".astro/**", "dist/**"],
  },
}
```

## Turbo Integration

### Turbo Configuration

```json
// turbo.json
{
  "pipeline": {
    "format": {
      "outputs": []
    },
    "lint": {
      "outputs": []
    },
    "build": {
      "dependsOn": ["^build"],
      "outputs": ["dist/**"]
    }
  }
}
```

### Package.json Scripts

```json
{
  "scripts": {
    "format": "turbo run format",
    "lint": "turbo run lint",
    "format:check": "turbo run format --dry-run",
    "lint:check": "turbo run lint --dry-run"
  }
}
```

## Git Hooks Integration

### Husky Configuration

```json
// package.json
{
  "lint-staged": {
    "*.{js,jsx,ts,tsx,astro,vue,svelte,json,jsonc,css,scss,md,mdx}": [
      "ultracite format"
    ]
  }
}
```

### Pre-commit Hook

```bash
#!/bin/sh
# .husky/pre-commit
npx ultracite format
```

## Astro-Specific Considerations

### Astro Configuration

```typescript
// astro.config.mjs
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import preact from "@astrojs/preact";
import vue from "@astrojs/vue";
import svelte from "@astrojs/svelte";
import qwik from "@astrojs/qwik";
import solid from "@astrojs/solid-js";
import angular from "@astrojs/angular";

export default defineConfig({
  integrations: [
    react(),
    preact({
      include: ["**/*.{tsx,jsx}"],
      exclude: ["**/*.react.{tsx,jsx}"], // Exclude React-specific files
    }),
    vue(),
    svelte(),
    qwik(),
    solid(),
    angular(),
  ],
  // Ultracite will handle formatting for all these frameworks
});
```

### File Extensions Supported

- `.astro` - Astro components
- `.tsx` - React/Preact/Qwik/Solid components
- `.vue` - Vue components
- `.svelte` - Svelte components
- `.ts` - TypeScript files
- `.js` - JavaScript files
- `.css` - Stylesheets
- `.scss` - Sass files
- `.json` - JSON files
- `.jsonc` - JSON with comments
- `.md` - Markdown files
- `.mdx` - MDX files

## Best Practices

### 1. Consistent File Structure

```
src/
├── components/
│   ├── react/
│   │   └── ReactComponent.tsx
│   ├── preact/
│   │   └── PreactComponent.tsx
│   ├── vue/
│   │   └── VueComponent.vue
│   ├── svelte/
│   │   └── SvelteComponent.svelte
│   ├── qwik/
│   │   └── QwikComponent.tsx
│   ├── solid/
│   │   └── SolidComponent.tsx
│   └── angular/
│       └── angular-component.ts
├── pages/
│   └── index.astro
└── layouts/
    └── Layout.astro
```

### 2. Type Safety

```typescript
// src/types/index.ts
export interface User {
  id: string;
  name: string;
  email: string;
}

export type ComponentProps<T> = {
  [K in keyof T]: T[K];
};
```

### 3. Import Organization

```typescript
// Ultracite will automatically organize imports
import type { User } from "@/types";
import { formatDate } from "@/utils/date";
import ReactComponent from "@/components/react/ReactComponent";
import PreactComponent from "@/components/preact/PreactComponent";
```

### 4. Accessibility

```tsx
// Ultracite enforces a11y rules
<button
  type="button"
  onClick={handleClick}
  onKeyDown={handleKeyDown}
  aria-label="Increment counter"
>
  Count: {count}
</button>
```

## Performance Optimization

### 1. Selective Formatting

```bash
# Format only changed files
npx ultracite format $(git diff --name-only --cached)

# Format specific directories
npx ultracite format src/components/
```

### 2. Parallel Processing

```json
// turbo.json
{
  "pipeline": {
    "format": {
      "parallel": true,
      "outputs": []
    }
  }
}
```

### 3. Caching

Ultracite uses Biome's caching system for optimal performance:

- Incremental formatting
- Smart file detection
- Parallel processing

## Troubleshooting

### Common Issues

1. **Astro files not formatting**
   - Ensure `.astro` files are not in ignore patterns
   - Check file permissions

2. **Framework-specific syntax errors**
   - Verify framework integrations are installed
   - Check TypeScript configuration

3. **Performance issues**
   - Use selective formatting for large projects
   - Enable parallel processing with Turbo

### Debug Commands

```bash
# Check Ultracite version
npx ultracite --version

# Verbose output
npx ultracite format --verbose

# Check configuration
npx ultracite check
```

## Migration from Other Tools

### From Prettier

```bash
# Remove Prettier
pnpm remove prettier

# Install Ultracite
pnpm add -D ultracite

# Update scripts
# Replace "prettier --write" with "ultracite format"
```

### From ESLint

```bash
# Ultracite includes linting, but you can keep ESLint for custom rules
# Update scripts to use Ultracite for formatting
```

This setup provides a comprehensive, performant, and maintainable solution for
formatting and linting Astro projects with multiple frameworks using Ultracite.
