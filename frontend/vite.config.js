import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,              // 👈 Change this to any port you want
    proxy: {
      '/app': 'http://localhost:8000',  // backend FastAPI server
    },
  },
})
