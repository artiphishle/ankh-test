import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)

// Dynamically load jsdom
const { JSDOM } = require('jsdom') as typeof import('jsdom')

// Create global DOM
const dom = new JSDOM('', { url: 'http://localhost' })
globalThis.window = dom.window as any
globalThis.document = dom.window.document
globalThis.navigator = dom.window.navigator
globalThis.HTMLElement = dom.window.HTMLElement
globalThis.Node = dom.window.Node

// Register jest-dom matchers (e.g. .toBeInTheDocument)
require('@testing-library/jest-dom')
