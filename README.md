# Griddie for Styled Components

Automatically adds IE11 prefixes to CSS Grid properties in [Styled Components](https://github.com/styled-components/styled-components).

## Usage

1. Install Griddie `npm install styled-griddie`.
2. Wrap any elements you want Griddie to prefix with a Styled Components `StyleSheetManager`.
3. Add `griddie` to the `stylisPlugins` prop.

## Example

```tsx
import React from 'react'
import { Styled } from './styles'
import { StyleSheetManager } from 'styled-components'
import griddie from 'styled-griddie'

const App = () => {
  return (
    <StyleSheetManager stylisPlugins={[griddie]}>
      <Styled.gridContainer>
        <Styled.gridItem>Hello, world!</Styled.gridItem>
      </Styled.gridContainer>
    </StyleSheetManager>
  )
}

export default App
```

## Property support

| Property                | Supported? | Notes                             |
| ----------------------- | ---------- | --------------------------------- |
| `display`               | ✅         | Supports `grid` and `inline-grid` |
| `grid-template`         | ✅         | Supports `repeat()` function      |
| `grid-template-rows`    | ✅         |
| `grid-template-columns` | ✅         |
| `grid-row`              | ✅         | See limitation #1, #2, #3 below.  |
| `grid-column`           | ✅         | See limitation #1, #2, #3 below.  |
| `grid-gap`              | ❌         |
| `grid-template-areas`   | ❌         |
| `grid-area`             | ❌         |
| `align-self`            | ❌         |
| `justify-self`          | ❌         |

## Current limitations

1. **Autoplace will not work in IE**. You must explicitly declare the placement of each grid item to support IE.

2. **Only shorthand syntax for `grid-row` and `grid-column` is supported.** The following properties will not work in IE: `grid-row-start`, `grid-row-end`, `grid-column-start`, `grid-column-end`.

3. **Negative values are not supported**. Declaring `grid-column: 1 / -1` to make a column span the full width will not work in IE.

## Why?

Styled Components currently uses [stylis](https://github.com/thysultan/stylis.js) to preprocess CSS, which does not autoprefix CSS Grid for IE as discussed in [stylis/#119](https://github.com/thysultan/stylis.js/issues/119) and [styled-components/#1184](https://github.com/styled-components/styled-components/issues/1184).

## Credit

This package builds on the excellent work of [@grncdr](https://github.com/grncdr) who shared the base of this plugin [here](https://github.com/thysultan/stylis.js/issues/119#issuecomment-463539789).
