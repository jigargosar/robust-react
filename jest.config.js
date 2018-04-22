const {mergeDeepRight} = require('ramda')
const config = require('kcd-scripts/dist/config/jest.config')

module.exports = mergeDeepRight(config, {
  setupFiles: ['./jest.setup.js'],
  automock: false,
  notify: true,
  notifyMode: 'change',
  coverageThreshold: null,
})
