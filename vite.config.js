import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/portfolio/',  // <-- your GitHub repo name
  plugins: [react()]
})
