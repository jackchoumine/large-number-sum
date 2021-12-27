/*
 * @Description : webpack 打包库
 * @Date        : 2021-12-27 22:28:14 +0800
 * @Author      : JackChou
 * @LastEditTime: 2021-12-27 23:05:44 +0800
 * @LastEditors : JackChou
 */
const TerserWebpackPlugin = require('terser-webpack-plugin')

module.exports = {
  mode: 'none',
  entry: {
    'large-number-sum': './src/index.js',
    'large-number-sum.min': './src/index.js',
  },
  devtool: 'source-map',
  output: {
    filename: '[name].js',
    library: 'largeNumberSum',
    libraryTarget: 'umd',
    //import * as largeNumberSum from 'large-number-sum' //  ESM
    //const largeNumberSum = require('large-number-sum') // cjs
    // require(['large-number-sum],function(largeNumberSum){ // amd
    //  largeNumberSum(a,b)
    // })
    libraryExport: 'default',
  },
  optimization: {
    minimize: true,
    // NOTE 只对 min.js 文件压缩
    minimizer: [new TerserWebpackPlugin({ include: /\.min\.js$/ })],
  },
}
