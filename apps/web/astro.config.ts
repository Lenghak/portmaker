import node from "@astrojs/node";
import react from "@astrojs/react";
import solidJs from "@astrojs/solid-js";
import svelte from "@astrojs/svelte";
import vercel from "@astrojs/vercel";
import vue from "@astrojs/vue";
import tailwindcss from "@tailwindcss/vite";
import typesafeRoutes from "astro-typesafe-routes";
import { defineConfig, envField } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [
    react({
      include: ["@packages/react", "**/*/react/**/*.tsx"],
    }),
    vue({
      include: ["@packages/vue", "**/*/vue/**/*.vue"],
    }),
    svelte({
      include: ["@packages/svelte", "**/*/svelte/**/*.svelte"],
    }),
    solidJs({
      include: ["@packages/solid", "**/*/solid/**/*.tsx"],
    }),
    typesafeRoutes(),
  ],
  output: "server",
  adapter:
    process.env.NODE_ENV === "production"
      ? vercel({
          imageService: true,
          devImageService: "sharp",
          skewProtection: true,
        })
      : node({
          mode: "standalone",
        }),
  env: {
    schema: {
      PUBLIC_APP_NAME: envField.string({
        access: "public",
        context: "client",
      }),
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
  trailingSlash: "ignore",
});
