import { defineConfig } from 'vite'
import preact from '@preact/preset-vite' // Fixed package name

export default defineConfig({
  plugins: [preact()],
  server: {
    port: 3000,
    open: true
  }
})
