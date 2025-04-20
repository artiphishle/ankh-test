import { defineConfig } from 'vitest/config'
import tsconfigPaths from 'vite-tsconfig-paths'
import { fileURLToPath } from 'url'

// 👇 Resolve your own dist file from inside ankh-test
const setupFile = fileURLToPath(
  new URL('./vitest-setup.js', import.meta.url)
)

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    environment: 'node',
    setupFiles: [setupFile]
  }
})
