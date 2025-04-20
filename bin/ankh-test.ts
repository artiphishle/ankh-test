#!/usr/bin/env node
import { execSync } from 'node:child_process'

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

const command = `vitest ${isCI ? 'run --coverage' : 'watch'} ${filteredArgs.join(' ')}`
execSync(command, { stdio: 'inherit' })
