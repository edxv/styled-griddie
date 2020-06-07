import { axisShorthand } from './properties/axisShorthand/axisShorthand'
import { templateAxis } from './properties/templateAxis/templateAxis'
import { templateShorthand } from './properties/templateShorthand/templateShorthand'
import { StylisPlugin } from 'styled-components'

export type GriddieFunction = (property: string) => ReturnType<StylisPlugin>

export type GridPropertiesObject = {
  [key: string]: string
}

export const parseGridProperties: GriddieFunction = property => {
  if (!property.includes('grid')) {
    return property
  }

  // display property
  if (property === 'display:grid') {
    return `
      display: -ms-grid;
      display: grid;
    `
  }

  if (property === 'display:inline-grid') {
    return `
      display: -ms-inline-grid;
      display: inline-grid;
    `
  }

  // check if grid- property
  const gridPropertyRegex = /^grid-([a-z-]+): *(.+)/
  const isGridProperty = property.match(gridPropertyRegex)

  if (!isGridProperty) {
    return property
  }

  const [, name, value] = isGridProperty

  // grid-template
  if (name === 'template') {
    return templateShorthand(name, value)
  }

  // grid-template-rows or grid-template-columns
  if (name === 'template-rows' || name === 'template-columns') {
    return templateAxis(name, value)
  }

  // grid-row or grid-column
  if (name === 'row' || name === 'column') {
    return axisShorthand(name, value)
  }

  return property
}
