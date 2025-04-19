# Ankhorage Testing

The all-in-one toolbox for testing modern apps.

## Purpose

I like my projects clean, for testing purposes I want to install one package, to keep the package.json transparent.

## What's in the box?

The package provides:

- Node.js internal testing functionality introduced in v18
- Component testing from `@testing-library`

## Usage

```typescript
import type { PropsWithChildren } from 'react'
import { describe, it, render, screen, assert } from 'ankh-testing'

const Button = ({ children }: { children: PropsWithChildren }) => (
  <button>{children}</button>
)

describe('Button', () => {
  it('renders with text', () => {
    render(<Button>Hello</Button>)
    assert.equal(screen.getByText('Hello').tagName, 'BUTTON')
  })
})
```