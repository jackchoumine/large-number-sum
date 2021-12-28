# TOW LARGE NUMBERS SUM

install by npm

```bash
npm i large-number-sum
```

install by yarn

```bash
yarn add large-number-sum
```

## Usage

largeNumberSum take two strings of number and return a string of sum.

`cjs`

```js
const largeNumberSum = require('large-number-sum')
const sum = largeNumberSum('99999', '1') //100000
const sum2 = largeNumberSum('99999999999999999999999999', '1')
```

`esm`

```js
import * as largeNumberSum from 'large-number-sum'
const sum = largeNumberSum('99999', '1') //100000
const sum2 = largeNumberSum('99999999999999999999999999', '1')
```

```js
export function removeComments(sql) {
  // eslint-disable-next-line quotes
  const singleQuote = `'`
  sql = sql.replace(/("(""|[^"])*")|('(''|[^'])*')|(--[^\n\r]*)|(\/\*[\w\W]*?(?=\*\/)\*\/)/gm, match => {
    if (
      (match[0] === '"' && match[match.length - 1] === '"') ||
      (match[0] === singleQuote && match[match.length - 1] === singleQuote)
    )
      return match

    return ''
  })

  return sql
}

export function minifySQL(sql) {
  // eslint-disable-next-line quotes
  const singleQuote = `'`
  sql = sql.replace(/("(""|[^"])*")|('(''|[^'])*')|([\t\r\n])/gm, match => {
    if (
      (match[0] === '"' && match[match.length - 1] === '"') ||
      (match[0] === singleQuote && match[match.length - 1] === singleQuote)
    )
      return match

    return ' '
  })

  sql = sql.replace(/("(""|[^"])*")|('(''|[^'])*')|([ ]{2,})/gm, match => {
    if (
      (match[0] === '"' && match[match.length - 1] === '"') ||
      (match[0] === singleQuote && match[match.length - 1] === singleQuote)
    )
      return match

    return ' '
  })
  sql = sql.replace(/\s+,/gm, ',')
  return sql.trim()
}
```
