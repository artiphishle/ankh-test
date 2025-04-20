#!/usr/bin/env node
import { execSync } from 'node:child_process'
import path from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))

const args = process.argv.slice(2)
const isCI = process.env.CI === 'true' || args.includes('--ci')
const isHelp = args.includes('--help') || args.includes('-h')
const filteredArgs = args.filter(arg => arg !== '--ci' && arg !== '--help' && arg !== '-h')

if (isHelp) {
  console.log(`
Usage:
  ankh-test [--ci] [--config <file>] [test/glob patterns]

Examples:
  ankh-test                  # Watch mode (default)
  ankh-test --ci             # Run once with coverage
  ankh-test src/utils        # Target specific files or folders
  ankh-test --help           # Show this help message
`)
  process.exit(0)
}

const vitestBin = path.resolve(__dirname, '../node_modules/.bin/vitest')
const userDefinedConfig = args.find(arg => arg === '--config')
const defaultConfigPath = path.resolve(__dirname, './vitest-config.js')


const command = [
  vitestBin,
  isCI ? 'run --coverage' : 'watch',
  ...(userDefinedConfig ? [] : ['--config', defaultConfigPath]),
  ...filteredArgs
].join(' ')

execSync(command, { stdio: 'inherit' })
