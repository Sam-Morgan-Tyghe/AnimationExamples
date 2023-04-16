import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  build: {
    rollupOptions: {
      external: [/^aws-sdk/],
    },
    // Output directory for the production build
    outDir: 'dist',
    // Set to 'esnext' to ensure maximum compatibility with modern browsers
    target: 'esnext',
    // Minify the output files
    minify: true,
    // Generate sourcemaps for the output files
    sourcemap: true,
  },
  resolve: {
    alias: {
      './runtimeConfig': './runtimeConfig.browser', //fix production build
    },
  },

  plugins: [
    // Use the React plugin for Vite
    react(),
    // Use the tsconfig-paths plugin for Vite to support path aliases defined in tsconfig.json
    tsconfigPaths(),
  ],
})
