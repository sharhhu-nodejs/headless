require('./check-versions')()

var ora = require('ora')
var rm = require('rimraf')
var path = require('path')
var chalk = require('chalk')
var webpack = require('webpack')
var config = require('../config')
var webpackProdConfig = require('./webpack.prod.conf')
var webpackTestConfig = require('./webpack.test.conf')


var spinner = ora('building for production...')
spinner.start()

var env_config = process.env.NODE_ENV === 'production' ? 'build' : 'testing';
var webpackConfig = process.env.NODE_ENV === 'production' ? webpackProdConfig : webpackTestConfig;

rm(path.join(config[env_config].assetsRoot, config[env_config].assetsSubDirectory), err => {
  if (err) throw err
  webpack(webpackConfig, function (err, stats) {
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n\n')

    console.log(chalk.cyan('  Build complete.\n'))
    console.log(chalk.yellow(
      '  Tip: built files are meant to be served over an HTTP server.\n' +
      '  Opening index.html over file:// won\'t work.\n'
    ))
  })
})
