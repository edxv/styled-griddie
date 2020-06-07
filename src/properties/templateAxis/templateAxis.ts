/** grid-template-rows and grid-template-columns properties */

export const templateAxis = (name: string, value: string) => {
  const axis = name.split('-')[1]
  const repeatKeywordRegex = /repeat\((\d+), *(.+)\)/
  const msValue = value.replace(repeatKeywordRegex, '($2)[$1]')

  return `
    -ms-grid-${axis}: ${msValue};
    grid-${name}: ${value};
  `
}
