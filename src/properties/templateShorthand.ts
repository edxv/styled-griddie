/** grid-template property */

export const templateShorthand = (name: string, value: string) => {
  const [rows, columns] = value.split(/\s*\/\s*/)
  const repeatKeywordRegex = /repeat\((\d+), *(.+)\)/

  if (rows && columns) {
    const msRowsValue = rows.replace(repeatKeywordRegex, '($2)[$1]')
    const msColumnsValue = columns.replace(repeatKeywordRegex, '($2)[$1]')

    return `
      -ms-grid-rows: ${msRowsValue};
      -ms-grid-columns: ${msColumnsValue};
      grid-${name}: ${value};
    `
  }

  return `${name}: ${value};`
}
