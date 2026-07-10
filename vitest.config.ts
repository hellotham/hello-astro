import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'node',
    include: ['**/*.test.{js,mjs,ts}'],
    exclude: ['node_modules', 'dist', '.astro']
  }
})
