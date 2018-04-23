const webpack = require(require.resolve('webpack'))

module.exports = (config, env) => {
  console.log('env', env)
  config.plugins = config.plugins.filter(
    plugin => !(plugin instanceof webpack['ProgressPlugin']),
  )
  return config
}
