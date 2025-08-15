import path from 'node:path';
import react from '@astrojs/react';
import solidJs from '@astrojs/solid-js';
import svelte from '@astrojs/svelte';
import vue from '@astrojs/vue';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import typesafeRoutes from 'astro-typesafe-routes';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), vue(), svelte(), solidJs(), typesafeRoutes()],
  vite: {
    plugins: [tailwindcss()],
    alias: {
      '@': path.resolve(path.dirname("./src")),
    },
  },
});
