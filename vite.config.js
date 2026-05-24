import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
const base = process.env.VERCEL ? '/' : '/chathu-portfolio/'

export default defineConfig({
  plugins: [react()],
  base,
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
