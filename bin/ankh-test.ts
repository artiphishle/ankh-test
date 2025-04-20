#!/usr/bin/env node
import { execSync } from 'node:child_process'
import path from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const args = process.argv.slice(2)
const isCI = process.env.CI === 'true' || args.includes('--ci')
const filteredArgs = args.filter(arg => arg !== '--ci')

if (args.includes('--help')) {
  console.log(`
Usage:
  ankh-test [--ci] [files...]

Examples:
  ankh-test                    # Watch mode
  ankh-test --ci               # Run once with coverage (CI mode)
  ankh-test src/utils         # Target a specific path
`)
  process.exit(0)
}

// Resolve the vitest binary within this package
const vitestBin = path.resolve(__dirname, '../node_modules/.bin/vitest')
const command = `${vitestBin} ${isCI ? 'run --coverage' : 'watch'} ${filteredArgs.join(' ')}`

execSync(command, { stdio: 'inherit' })
