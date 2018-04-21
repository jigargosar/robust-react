const config = require('kcd-scripts/dist/config/babelrc')

config.plugins.push([
  'flow-runtime',
  {
    assert: true,
    annotate: true,
  },
])

module.exports = config
