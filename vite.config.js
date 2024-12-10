import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://CrysisDavid.github.io/Conference-Event-Planner",
  plugins: [react()],
})
