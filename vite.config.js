import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Mi-Portafolio/',  // Reemplaza con el nombre de tu repositorio de GitHub
  plugins: [react()],
})
