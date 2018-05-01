const {mergeDeepRight} = require('ramda')
const config = require('kcd-scripts/dist/config/jest.config')

module.exports = mergeDeepRight(config, {
  displayName: 'test',
  setupFiles: [require.resolve('./jest-tests.setup')],
  automock: false,
  coverageThreshold: null,
})
