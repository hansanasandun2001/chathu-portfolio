import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/chathu-portfolio/',
  assetsInclude: ['**/*.pdf'],
  server: {
    host: '0.0.0.0',
    port: 5173,
    headers: {
      'Content-Disposition': 'attachment',
    },
  },
  build: {
    outDir: 'build',
  },
})
