import js from "@eslint/js";
import typescript from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";

export default [
  // Base configuration for all files
  js.configs.recommended,

  // TypeScript files
  {
    files: ["**/*.{ts,tsx,js,jsx}"],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
      globals: {
        node: true,
        es2022: true,
      },
    },
    plugins: {
      "@typescript-eslint": typescript,
    },
    rules: {
      // Turn off ESLint rules that oxlint handles better
      "no-unused-vars": "off",
      "no-unused-expressions": "off",
      "no-undef": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
    },
  },

  // Ignore patterns
  {
    ignores: [
      "node_modules/",
      "dist/",
      "build/",
      ".astro/",
      ".turbo/",
      ".next/",
      ".nuxt/",
      ".output/",
      "coverage/",
      "*.min.js",
      "*.bundle.js",
      "**/.vercel/**",
      "**/dist/**",
      "**/build/**",
      "**/.astro/**",
      "**/.turbo/**",
      "**/.next/**",
      "**/.nuxt/**",
      "**/.output/**",
      "**/coverage/**",
    ],
  },
];
