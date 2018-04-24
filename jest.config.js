const {mergeDeepRight} = require('ramda')
const config = require('kcd-scripts/dist/config/jest.config')

module.exports = mergeDeepRight(config, {
  setupFiles: ['./jest.setup.js'],
  automock: false,
  notify: true,
  notifyMode: 'change',
  coverageThreshold: null,
  testMatch: [...config.testMatch, '**/unified/**/*\\.js'],
  // projects: [
  //   {
  //     displayName: 'test',
  //   },
  //   {
  //     displayName: 'lint',
  //     runner: 'jest-runner-eslint',
  //     testMatch: ['<rootDir>/**/*.js'],
  //   },
  //   {
  //     displayName: 'flowtype',
  //     runner: 'jest-runner-flowtype',
  //   },
  //   {
  //     displayName: 'prettier',
  //     runner: 'jest-runner-prettier',
  //     moduleFileExtensions: [
  //       'js',
  //       'jsx',
  //       'json',
  //       'ts',
  //       'tsx',
  //       'css',
  //       'less',
  //       'scss',
  //       'graphql',
  //       'md',
  //       'markdown',
  //     ],
  //     testMatch: [
  //       '**/*.js',
  //       '**/*.jsx',
  //       '**/*.json',
  //       '**/*.ts',
  //       '**/*.tsx',
  //       '**/*.css',
  //       '**/*.less',
  //       '**/*.scss',
  //       '**/*.graphql',
  //       '**/*.md',
  //       '**/*.markdown',
  //     ],
  //   },
  // ],
})

// console.log(config.testMatch)
// console.log(module.exports)
// exit(1)
