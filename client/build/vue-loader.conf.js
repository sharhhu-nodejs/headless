var utils = require('./utils')
var config = require('../config')
// var isProduction = process.env.NODE_ENV === 'production'
var env = process.env.NODE_ENV;
var envProp = env === 'production' ? 'build' : (env === 'testing' ? 'testing' : 'dev');
module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: config[envProp].sourceMap,
    extract: env !== 'development'
  })
}
