/** grid-row and grid-column properties
 *
 * supports:
 * grid-column: 1;
 * grid-column: 1 / span 2;
 * grid-column: 1 / 3;
 *
 * does not support:
 * grid-column: 1 / -1;
 */

export const axisShorthand = (name: string, value: string) => {
  const [start, end] = value.split(/\s*\/\s*/)
  const endHasSpan = end?.match('span ')

  // grid-column: 1;
  if (!start) {
    return `
      -ms-grid-${name}: ${value};
      grid-${name}: ${value};
    `
  }

  // grid-column: 1 / span 2;
  if (start && endHasSpan) {
    const spanValue = end.replace('span ', '')

    return `
      -ms-grid-${name}: ${start};
      -ms-grid-${name}-span: ${spanValue};
      grid-${name}: ${value};
    `
  }

  // grid-column: 1 / 3;
  if (start && !endHasSpan) {
    const startValue = parseInt(start)
    const endValue = parseInt(end)
    const spanValue = endValue - startValue

    return `
      -ms-grid-${name}: ${start};
      -ms-grid-${name}-span: ${spanValue};
      grid-${name}: ${value};
    `
  }

  return `
    grid-${name}: ${value};
  `
}
