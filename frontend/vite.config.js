// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // This maps "pages" to the actual physical folder
      "@": path.resolve(__dirname, "./src"),
    "assets": path.resolve(__dirname, "./src/assets"),
    "components": path.resolve(__dirname, "./src/components"),
    "pages": path.resolve(__dirname, "./src/pages"),
    },
  },
})