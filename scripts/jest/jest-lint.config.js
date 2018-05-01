// const {mergeDeepRight} = require('ramda')
// const config = require('kcd-scripts/dist/config/jest.config')

// module.exports = mergeDeepRight(config, {
//   setupFiles: ['./jest-tests.setup.js'],
//   automock: false,
//   notify: true,
//   notifyMode: 'change',
//   coverageThreshold: null,
// })

const {appDirectory} = require('kcd-scripts/dist/utils')

module.exports = {
  displayName: 'lint',
  runner: 'jest-runner-eslint',
  rootDir: appDirectory,
  roots: ['<rootDir>/src', '<rootDir>/scripts'],
  testMatch: ['**/*.js'],
}
