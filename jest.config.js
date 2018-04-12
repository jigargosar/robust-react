const {mergeDeepRight} = require('ramda')
const config = require('kcd-scripts/dist/config/jest.config')
console.log(config)
module.exports = mergeDeepRight(config, {
  notify: true,
  notifyMode: 'failure-success',
})
