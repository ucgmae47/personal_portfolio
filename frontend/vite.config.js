import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Production builds on GitHub Pages live at /personal_portfolio/.
// Local `npm run dev` keeps the root path.
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? '/personal_portfolio/' : '/',
}))
