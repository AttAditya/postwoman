import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [preact()],
  base: './',
  resolve: {
    alias: {
      "@styles": "/src/styles",
      "@components": "/src/components",
      "@contexts": "/src/contexts",
    }
  }
})
