import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',
  server: {
    port: 7798,
    open: true,
    strictPort: true,
  },
  preview: {
    port: 7798,
    strictPort: true,
  },
})
