
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./styled-griddie.cjs.production.min.js')
} else {
  module.exports = require('./styled-griddie.cjs.development.js')
}
