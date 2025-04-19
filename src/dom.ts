import { JSDOM } from 'jsdom'

// Nur initialisieren, wenn jsdom nicht schon da ist
if (typeof window === 'undefined' || !window.document) {
  const dom = new JSDOM('', { url: 'http://localhost' })
  globalThis.window = dom.window as unknown as typeof globalThis.window
  globalThis.document = dom.window.document
  globalThis.navigator = dom.window.navigator
}
