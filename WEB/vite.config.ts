import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'

export default defineConfig({
  server:{
    port:3000
  },
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
})
