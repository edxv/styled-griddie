import { parseGridProperties } from './parser'
import { StylisPlugin } from 'styled-components'

const griddie: StylisPlugin = (context, content) => {
  if (context === 1 || context === 2) {
    return Array.isArray(content)
      ? content.forEach(item => parseGridProperties(item))
      : parseGridProperties(content)
  }
}

if (Object.getOwnPropertyDescriptor(griddie, 'name')?.configurable) {
  Object.defineProperty(griddie, 'name', {
    value: 'griddie'
  })
}

export default griddie
