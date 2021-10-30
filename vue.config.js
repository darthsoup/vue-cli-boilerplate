const progressBarPlugin = require('progress-bar-webpack-plugin')
const bundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const chalk = require('chalk')

const progressBarFormat = `${chalk.green.bold('Building')} [:bar] ${chalk.yellow.bold(':percent')} (:elapsed seconds)`
const publicPath = process.env.BASE_URL || '/';
const development = process.env.NODE_ENV !== "production";

const configureWebpack = config => {
  if (!development && process.env.npm_lifecycle_event === 'analyze') {
    config.plugins.push(new bundleAnalyzerPlugin({
      isModernBuild: process.env.VUE_CLI_MODERN_BUILD === "true"
    }))
  }
  config.plugins.push(new progressBarPlugin({ 
    format: progressBarFormat,
    clear: false
  }))
}

module.exports = {
  publicPath,

  lintOnSave: false,
  transpileDependencies: true,

  configureWebpack
}
