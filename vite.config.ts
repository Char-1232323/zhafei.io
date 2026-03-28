import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import { getBasePath } from './src/config/deployment'

export default defineConfig({
  base: getBasePath(process.env.GITHUB_REPOSITORY),
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/test/setup.ts'
  }
})
