// vite.config.js (or .ts)
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // <-- Import this

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // <-- Add this to the plugins array
  ],
})