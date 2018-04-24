const {mergeDeepRight} = require('ramda')
const config = require('kcd-scripts/dist/config/jest.config')

module.exports = mergeDeepRight(config, {
  setupFiles: ['./jest.setup.js'],
  automock: false,
  notify: true,
  notifyMode: 'change',
  coverageThreshold: null,
  testMatch: [...config.testMatch, '**/unified/**/*\\.js'],
})

// console.log(config.testMatch)
// console.log(module.exports)
// exit(1)
