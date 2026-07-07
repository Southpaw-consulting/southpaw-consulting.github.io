import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Root org site (southpaw-consulting.github.io) serves from the domain root
  base: '/',
  plugins: [react()],
  server: {
    port: 5173,
  },
})
