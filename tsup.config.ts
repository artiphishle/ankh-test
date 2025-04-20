import { defineConfig } from 'tsup'

export default defineConfig([
  {
    entry: { 'ankh-test': 'bin/ankh-test.ts' },
    format: ['esm'],
    outDir: 'dist',
    clean: true
  },
  {
    entry: { index: 'src/index.ts' },
    format: ['esm'],
    outDir: 'dist',
    clean: false,
    dts: true
  },
  {
    entry: { 'vitest-config': 'src/vitest-config.ts' },
    format: ['esm'],
    outDir: 'dist',
    clean: false
  },
  {
    entry: { 'vitest-setup': 'src/vitest-setup.ts' },
    format: ['esm'],
    outDir: 'dist',
    clean: false
  }
])
