/*
 * @Description : webpack 打包库
 * @Date        : 2021-12-27 22:28:14 +0800
 * @Author      : JackChou
 * @LastEditTime: 2021-12-27 23:52:01 +0800
 * @LastEditors : JackChou
 */

/**
 * @type {import('webpack').Configuration}
 */
const TerserWebpackPlugin = require('terser-webpack-plugin')

module.exports = {
  mode: 'none',
  entry: {
    'large-number-sum': './src/index.js',
    'large-number-sum.min': './src/index.js',
  },
  // devtool: 'none',
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
    clean: true, // 构建之前删除上次构建产物
  },
  optimization: {
    minimize: true,
    // NOTE 只对 min.js 文件压缩
    minimizer: [new TerserWebpackPlugin({ include: /\.min\.js$/ })],
  },
}
