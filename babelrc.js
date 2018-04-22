/* eslint-disable no-console,no-process-exit */

const config = require('kcd-scripts/dist/config/babelrc')

// verifying: this file is never required by kcd-scripts

console.log('using custom babel config')
process.exit(1)

config.plugins.push([
  'flow-runtime',
  {
    assert: true,
    annotate: true,
  },
])

config.plugins.push('espower')

module.exports = config
