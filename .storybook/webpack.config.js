const webpack = require(require.resolve('webpack'))

module.exports = (config, env) => {
  console.log('env', env)
  config.plugins = config.plugins.filter(
    plugin => !(plugin instanceof webpack['ProgressPlugin']),
  )

  config.module.rules.push({
    test: /__stories__\/.+\.js$/,
    loaders: [require.resolve('@storybook/addon-storysource/loader')],
    enforce: 'pre',
  })
  return config
}
