import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import * as path from 'path';
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [react(), svgr()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/lib/vitest.ts',
    coverage: {
      all: true,
    },
  },
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  }
})
