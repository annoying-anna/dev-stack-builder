import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
//
// `base` stays "/" locally. The GitHub Pages workflow builds with
// VITE_BASE="/<repository-name>/" so that the asset URLs of a project page
// resolve correctly. App.jsx reads `import.meta.env.BASE_URL` when it fetches
// the technology JSON, which keeps the data loading working on both setups.
export default defineConfig({
  base: process.env.VITE_BASE ?? '/',
  plugins: [react(), tailwindcss()],
})
