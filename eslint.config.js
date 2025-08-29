import js from "@eslint/js";
import prettierConfig from "eslint-config-prettier";
import prettier from "eslint-plugin-prettier";
import typescript from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";

export default [
  // Base configuration for all files
  js.configs.recommended,

  // Prettier configuration
  prettierConfig,

  // TypeScript files
  {
    files: ["**/*.{ts,tsx,js,jsx}"],
    languageOptions: {
      globals: {
        es2022: true,
        node: true,
      },
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    plugins: {
      "@typescript-eslint": typescript,
      prettier: prettier,
    },
    rules: {
      // Turn off ESLint rules that oxlint handles better
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-unused-vars": "off",
      "no-undef": "off",
      "no-unused-expressions": "off",
      "no-unused-vars": "off",

      // Disable strict rules for component development
      "eslint/func-style": "off",
      "eslint/sort-keys": "off",
      "eslint/sort-imports": "off",
      "eslint/no-ternary": "off",
      "eslint/no-magic-numbers": "off",
      "eslint-plugin-unicorn/prefer-global-this": "off",
      "oxc/no-rest-spread-properties": "off",

      // Prettier rules
      "prettier/prettier": "error",
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
