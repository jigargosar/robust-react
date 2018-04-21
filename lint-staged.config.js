/* eslint-disable no-console */
const {mergeDeepRight} = require('ramda')
const config = require('kcd-scripts/dist/config/lintstagedrc')

console.log(config)

module.exports = mergeDeepRight(config, {ignore: ['**/flow-typed/**']})
