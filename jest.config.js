const {mergeDeepRight} = require('ramda')
const config = require('kcd-scripts/dist/config/jest.config')

module.exports = mergeDeepRight(config, {
  notify: true,
  notifyMode: 'change',
})
