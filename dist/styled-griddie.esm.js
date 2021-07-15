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
var axisShorthand = function axisShorthand(name, value) {
  var _value$split = value.split(/\s*\/\s*/),
      start = _value$split[0],
      end = _value$split[1];

  var endHasSpan = end === null || end === void 0 ? void 0 : end.match('span '); // grid-column: 1;

  if (!start) {
    return "\n      -ms-grid-" + name + ": " + value + ";\n      grid-" + name + ": " + value + ";\n    ";
  } // grid-column: 1 / span 2;


  if (start && endHasSpan) {
    var spanValue = end.replace('span ', '');
    return "\n      -ms-grid-" + name + ": " + start + ";\n      -ms-grid-" + name + "-span: " + spanValue + ";\n      grid-" + name + ": " + value + ";\n    ";
  } // grid-column: 1 / 3;


  if (start && !endHasSpan) {
    var startValue = parseInt(start);
    var endValue = parseInt(end);

    var _spanValue = endValue - startValue;

    return "\n      -ms-grid-" + name + ": " + start + ";\n      -ms-grid-" + name + "-span: " + _spanValue + ";\n      grid-" + name + ": " + value + ";\n    ";
  }

  return "\n    grid-" + name + ": " + value + ";\n  ";
};

/** grid-template-rows and grid-template-columns properties */
var templateAxis = function templateAxis(name, value) {
  var axis = name.split('-')[1];
  var repeatKeywordRegex = /repeat\((\d+), *(.+)\)/;
  var msValue = value.replace(repeatKeywordRegex, '($2)[$1]');
  return "\n    -ms-grid-" + axis + ": " + msValue + ";\n    grid-" + name + ": " + value + ";\n  ";
};

/** grid-template property */
var templateShorthand = function templateShorthand(name, value) {
  var _value$split = value.split(/\s*\/\s*/),
      rows = _value$split[0],
      columns = _value$split[1];

  var repeatKeywordRegex = /repeat\((\d+), *(.+)\)/;

  if (rows && columns) {
    var msRowsValue = rows.replace(repeatKeywordRegex, '($2)[$1]');
    var msColumnsValue = columns.replace(repeatKeywordRegex, '($2)[$1]');
    return "\n      -ms-grid-rows: " + msRowsValue + ";\n      -ms-grid-columns: " + msColumnsValue + ";\n      grid-" + name + ": " + value + ";\n    ";
  }

  return name + ": " + value + ";";
};

var parseGridProperties = function parseGridProperties(property) {
  if (!property.includes('grid')) {
    return property;
  } // display property


  if (property === 'display:grid') {
    return "\n      display: -ms-grid;\n      display: grid;\n    ";
  }

  if (property === 'display:inline-grid') {
    return "\n      display: -ms-inline-grid;\n      display: inline-grid;\n    ";
  } // check if grid- property


  var gridPropertyRegex = /^grid-([a-z-]+): *(.+)/;
  var isGridProperty = property.match(gridPropertyRegex);

  if (!isGridProperty) {
    return property;
  }

  var name = isGridProperty[1],
      value = isGridProperty[2]; // grid-template

  if (name === 'template') {
    return templateShorthand(name, value);
  } // grid-template-rows or grid-template-columns


  if (name === 'template-rows' || name === 'template-columns') {
    return templateAxis(name, value);
  } // grid-row or grid-column


  if (name === 'row' || name === 'column') {
    return axisShorthand(name, value);
  }

  return property;
};

var _Object$getOwnPropert;

var griddie = function griddie(context, content) {
  if (context === 1 || context === 2) {
    return Array.isArray(content) ? content.forEach(function (item) {
      return parseGridProperties(item);
    }) : parseGridProperties(content);
  }
};

if ((_Object$getOwnPropert = /*#__PURE__*/Object.getOwnPropertyDescriptor(griddie, 'name')) === null || _Object$getOwnPropert === void 0 ? void 0 : _Object$getOwnPropert.configurable) {
  Object.defineProperty(griddie, 'name', {
    value: 'griddie'
  });
}

export default griddie;
//# sourceMappingURL=styled-griddie.esm.js.map
