'use strict'
const path = require('path')
const defaultSettings = require('./src/settings.js')
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i;

function resolve(dir) {
  return path.join(__dirname, dir)
}

const name = defaultSettings.title || '停车场' // page title 
const port = process.env.port || process.env.npm_config_port || 8080 // dev port

module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: false,
  devServer: {
    port: port,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    disableHostCheck: true,
    proxy: {
      [process.env.VUE_APP_BASE_API]: {
        target: `http://127.0.0.1:${port}/mock`,
        changeOrigin: true,
        pathRewrite: {
          ['^' + process.env.VUE_APP_BASE_API]: ''
        }
      }
    },
  },
  // configureWebpack: {
  //   name: name,
  //   resolve: {
  //     alias: {
  //       '@': resolve('src')
  //     }
  //   },
  //   performance: {
  //     hints:'warning',
  //     //入口起点的最大体积
  //     maxEntrypointSize: 50000000,
  //     //生成文件的最大体积
  //     maxAssetSize: 30000000,
  //     //只给出 js 文件的性能提示
  //     assetFilter: function(assetFilename) {
  //       return assetFilename.endsWith('.js');
  //     }
  //   },
  //   externals: {
      
  //   },
  // },
  configureWebpack: config => {
    const plugins = [];

    // Begin 生成 gzip 压缩文件
    plugins.push(
        new CompressionWebpackPlugin({
            filename: "[path].gz[query]",
            algorithm: "gzip",
            test: productionGzipExtensions,
            threshold: 5120,
            minRatio: 0.8
        })
    );
    // End 生成 gzip 压缩文件
    // config.externals = {
    //   'vue': 'Vue',
    //   'Vant': 'vant',
    //   'vue-router': 'VueRouter',
    //   'vuex': 'Vuex',
    //   'axios': 'axios'
    // }
    config.plugins = [...config.plugins, ...plugins];
  },
  chainWebpack(config) {
    config.plugins.delete('preload') // TODO: need test
    config.plugins.delete('prefetch') // TODO: need test
    config.performance
      .set('maxAssetSize', 30000000)
      .set("maxEntrypointSize",50000000)
      .set("hints",false)
    // set svg-sprite-loader
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()

    // set preserveWhitespace
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        options.compilerOptions.preserveWhitespace = true
        return options
      })
      .end()

    config
      // https://webpack.js.org/configuration/devtool/#development
      .when(process.env.NODE_ENV === 'development',
        config => config.devtool('cheap-source-map')
      )

    config
      .when(process.env.NODE_ENV !== 'development',
        config => {
          config
            .plugin('ScriptExtHtmlWebpackPlugin')
            .after('html')
            .use('script-ext-html-webpack-plugin', [{
            // `runtime` must same as runtimeChunk name. default is `runtime`
              inline: /runtime\..*\.js$/
            }])
            .end()
          config
            .optimization.splitChunks({
              chunks: 'all',
              cacheGroups: {
                libs: {
                  name: 'chunk-libs',
                  test: /[\\/]node_modules[\\/]/,
                  priority: 10,
                  chunks: 'initial' // only package third parties that are initially dependent
                },
                // elementUI: {
                //   name: 'chunk-elementUI', // split elementUI into a single package
                //   priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
                //   test: /[\\/]node_modules[\\/]_?element-ui(.*)/ // in order to adapt to cnpm
                // },
                vantUI: {
                  name: 'chunk-vantUI',
                  priority: 20,
                  test: /[\\/]node_modules[\\/]_?vant(.*)/
                },
                commons: {
                  name: 'chunk-commons',
                  test: resolve('src/components'), // can customize your rules
                  minChunks: 3, //  minimum common number
                  priority: 5,
                  reuseExistingChunk: true
                }
              }
            })
          config.optimization.runtimeChunk('single')
        }
      )
  }
}
