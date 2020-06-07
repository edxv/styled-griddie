import { GridPropertiesObject } from '../parser'

/** grid-row-end and grid-column-end properties */

export const axisEnd = (
  name: string,
  endValue: string,
  allGridProperties: GridPropertiesObject
) => {
  const axis = name.split('-')[0]
  const startValue = allGridProperties[`${axis}-start`]
  const msSpanValue = parseInt(endValue) - parseInt(startValue)

  return `
    -ms-grid-${axis}-span: ${msSpanValue};
    grid-${name}: ${endValue};
  `
}
