# 🧪 Ankhorage Test

![npm version](https://img.shields.io/npm/v/ankh-test?color=blue)
![types](https://img.shields.io/npm/types/ankh-test)
![license](https://img.shields.io/npm/l/ankh-test)
![build](https://img.shields.io/badge/built%20with-tsup-3178c6?logo=typescript)

**A native-feeling test toolbox & CLI** for React component testing — minimal, fast, and expressive.  
Includes a Vitest-powered CLI (`ankh-test`) and a typed test utility module ready to use across your projects.

---

## 🚀 Features

- ✅ Unified test CLI: `ankh-test`, powered by [Vitest](https://vitest.dev)
- ✅ Built-in support for `jsdom`, `@testing-library/react`, `assert.strict`
- ✅ Fully typed API, no global setup needed
- ✅ Ideal for component/unit testing in React, with native-like experience

---

## 📦 Installation

Install locally into any project:

```bash
pnpm add -D ankh-test

---

## ✨ Getting Started

Create a test file like `Button.test.tsx`:

```tsx
import { describe, it, render, screen, assert } from 'ankh-test'

const Button = ({ children }: { children: React.ReactNode }) => (
  <button>{children}</button>
)

describe('Button', () => {
  it('renders text', () => {
    render(<Button>Hello</Button>)
    assert.equal(screen.getByText('Hello').tagName, 'BUTTON')
  })
})
