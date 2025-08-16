import node from '@astrojs/node';
import react from '@astrojs/react';
import solidJs from '@astrojs/solid-js';
import svelte from '@astrojs/svelte';
import vercel from '@astrojs/vercel';
import vue from '@astrojs/vue';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig, envField } from 'astro/config';
import typesafeRoutes from 'astro-typesafe-routes';

// https://astro.build/config
export default defineConfig({
  integrations: [
    react({
      include: ['@packages/react'],
    }),
    vue({
      include: ['@packages/vue'],
    }),
    svelte({
      include: ['@packages/svelte'],
    }),
    solidJs({
      include: ['@packages/solid'],
    }),
    typesafeRoutes(),
  ],
  output: 'server',
  adapter:
    process.env.NODE_ENV === 'production'
      ? vercel({
          imageService: true,
          devImageService: 'sharp',
          skewProtection: true,
        })
      : node({
          mode: 'standalone',
        }),
  env: {
    schema: {
      PUBLIC_APP_NAME: envField.string({
        access: 'public',
        context: 'client',
      }),
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
  trailingSlash: 'ignore',
});
