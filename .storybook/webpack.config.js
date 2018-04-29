const webpack = require(require.resolve('webpack'))

module.exports = (config, env) => {
  console.log('env', env)
  config.plugins = config.plugins.filter(
    plugin => !(plugin instanceof webpack['ProgressPlugin']),
  )

  config.module.rules.push({
    test: /__stories__\/.+\.js$/,
    loaders: [
      {
        loader: require.resolve('@storybook/addon-storysource/loader'),
        options: {
          prettierConfig: {
            printWidth: 80,
            tabWidth: 2,
            useTabs: false,
            semi: false,
            singleQuote: true,
            trailingComma: 'all',
            bracketSpacing: false,
            jsxBracketSameLine: false,
          },
        },
      },
    ],
    enforce: 'pre',
  })
  return config
}
