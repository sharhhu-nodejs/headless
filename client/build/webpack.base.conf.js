var path = require('path')
var utils = require('./utils')
var config = require('../config')
var vueLoaderConfig = require('./vue-loader.conf')
var webpack = require('webpack')
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}
var env = process.env.NODE_ENV;

var publicPath = {
  "testing": config.testing.assetsPublicPath,
  "production": config.build.assetsPublicPath,
  "development": config.dev.assetsPublicPath
}

var outputPath = {
  "testing": config.testing.assetsRoot,
  "production": config.build.assetsRoot,
  "development": config.dev.assetsRoot
}

module.exports = {
  entry: {
    app: './src/main.js'
  },
  output: {
    path: outputPath[env] || outputPath["production"],
    filename: '[name].js',
    //指定static目录。注意这个地方关系到文件文件位置的前缀，请妥善更改
    publicPath: publicPath[env] || publicPath['development']
  },
  resolve: {
    //这里添加申明的扩展类型。
    //require或者import的时候，在没有指定扩展名时会自动查找相关目录下的下面申明的扩展名 
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '~':resolve('node_modules')
    }
  },
  module: {
    rules: [
      // 根据项目需求lint，目前注释掉不lint，规则暂不明确
      // {
      //   test: /\.(js|vue)$/,
      //   loader: 'eslint-loader',
      //   enforce: 'pre',
      //   include: [resolve('src'), resolve('test')],
      //   options: {
      //     formatter: require('eslint-friendly-formatter')
      //   }
      // },
      {
        test: /\.vue$/,
        //默认vue-loader支持less、sass、postcss、styl的形式，只需要安装这些插件即可
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  plugins: [
    //将$和jQuery作为全局变量。如有其它模块需要设置全局变量，请先使用npm安装，然后在这里申明。
    new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        Swiper: 'swiper'
    })
  ]
}
