/** grid-row-start and grid-column-start properties */

export const axisStart = (name: string, startValue: string) => {
  const axis = name.split('-')[0]

  return `
    -ms-grid-${axis}: ${startValue};
    ${name}: ${startValue};
  `
}
