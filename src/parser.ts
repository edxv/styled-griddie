import { axisShorthand } from './properties/axisShorthand'
import { axisStart } from './properties/axisStart'
import { axisEnd } from './properties/axisEnd'
import { templateAxis } from './properties/templateAxis'
import { templateShorthand } from './properties/templateShorthand'
import { StylisPlugin } from './index'

export type GriddieFunction = (content: string) => ReturnType<StylisPlugin>

export type GridPropertiesObject = {
  [key: string]: string
}

export const parseGridProperties: GriddieFunction = content => {
  if (!content.includes('grid')) {
    return content
  }

  // display property
  if (content === 'display:grid') {
    return `
      display: -ms-grid;
      display: grid;
    `
  }

  if (content === 'display:inline-grid') {
    return `
      display: -ms-inline-grid;
      display: inline-grid;
    `
  }

  // check if grid- property
  const gridPropertyRegex = /^grid-([a-z-]+): *(.+)/
  const isGridProperty = content.match(gridPropertyRegex)

  if (!isGridProperty) {
    return content
  }

  const [, name, value] = isGridProperty

  // all grid properties in this context (e.g. in this CSS selector)
  const allGridProperties: GridPropertiesObject = {
    [name]: value
  }

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

  // grid-row-start or grid-column-start
  if (name === 'row-start' || name === 'column-start') {
    return axisStart(name, value)
  }

  // grid-row-end or grid-column-end
  if (name === 'row-end' || name === 'column-end') {
    return axisEnd(name, value, allGridProperties)
  }

  return content
}
