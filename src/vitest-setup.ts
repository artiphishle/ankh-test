import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)
const { JSDOM } = require('jsdom') as typeof import('jsdom')

const dom = new JSDOM('', { url: 'http://localhost' })

globalThis.window = dom.window as any
globalThis.document = dom.window.document

// only assign if not defined
if (!('navigator' in globalThis)) {
  Object.defineProperty(globalThis, 'navigator', {
    value: dom.window.navigator,
    configurable: true,
    writable: false,
    enumerable: true,
  })
}

globalThis.HTMLElement = dom.window.HTMLElement
globalThis.Node = dom.window.Node
