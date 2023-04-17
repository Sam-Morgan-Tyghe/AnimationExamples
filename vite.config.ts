/// <reference types="vitest" />
import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import checker from 'vite-plugin-checker'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    // global: {}, // disable to run storybook build
  },
  esbuild: {
    //  jsxInject: `import React from 'react'`, // disable to run storybook build
  },
  server: {
    watch: {
      usePolling: true,
    },
  },

  plugins: [
    react(),
    tsconfigPaths(),
    checker({
      typescript: true,
      // eslint: {
      //   lintCommand: 'eslint "./src/**/*.{ts,tsx}"',
      // },
    }),
  ],
})
