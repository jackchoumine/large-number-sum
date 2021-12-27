/*
 * @Description :
 * @Date        : 2021-12-27 22:37:10 +0800
 * @Author      : JackChou
 * @LastEditTime: 2021-12-27 23:41:40 +0800
 * @LastEditors : JackChou
 */

export default function add(a, b) {
  let sizeOfa = ('' + a).length - 1
  let sizeOfb = ('' + b).length - 1
  let carry = 0
  let result = ''
  while (sizeOfa >= 0 || sizeOfb >= 0) {
    let x = 0
    let y = 0
    let sum = ''
    if (sizeOfa >= 0) {
      x = a[sizeOfa] - '0'
      sizeOfa--
    }
    if (sizeOfb >= 0) {
      y = b[sizeOfb] - '0'
      sizeOfb--
    }
    sum = x + y + carry
    if (sum >= 10) {
      carry = 1
      sum -= 10
    } else {
      carry = 0
    }
    result = sum + result
  }
  if (carry) {
    result = carry + result
  }
  return result
}
// console.log(add('999', '1')) // 1000
// console.log(add('1', '999')) // 1000
// console.log(add('123', '321')) // 444
// console.log(add('000', '321')) // 321
// const a = '99999999999999999999999999999999999999'
// console.log(a.length) // 38
// console.log(add(a, '1').length) //39
