import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    alias: {
      './image.png': '/tests/__mocks__/image.png',
    },
    include: ['tests/**/*.unit.test.ts'],
    exclude: ['e2e/**'],
  },
});