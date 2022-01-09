/*
 * @Description :
 * @Date        : 2022-01-09 21:10:50 +0800
 * @Author      : JackChou
 * @LastEditTime: 2022-01-09 21:50:14 +0800
 * @LastEditors : JackChou
 */
const expect = require('chai').expect
// const largeNumberSum = require('../index')
// import add from '../src/index.js'
const { add } = require('../src')
describe('测试index.js', () => {
  it('should work', () => {
    expect(1).to.equal(1)
  })
})

describe('add', () => {
  it('add return should be a string', () => {
    expect(add('1', '2')).to.equal('3')
  })
})
