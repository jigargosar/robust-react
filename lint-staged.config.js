/* eslint-disable no-console */

/**
 * Verified that it is been used by kcd-scripts (husky) in precommit hook
 * */

const {mergeDeepRight} = require('ramda')
const config = require('kcd-scripts/dist/config/lintstagedrc')

module.exports = mergeDeepRight(config, {ignore: ['**/flow-typed/**']})
