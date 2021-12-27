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
