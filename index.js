/*
 * @Description :
 * @Date        : 2021-12-27 23:06:18 +0800
 * @Author      : JackChou
 * @LastEditTime: 2021-12-27 23:06:29 +0800
 * @LastEditors : JackChou
 */
if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dist/large-number-sum.min.js')
} else {
  module.exports = require('./dist/large-number-sum.js')
}
