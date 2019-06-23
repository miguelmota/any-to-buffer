# any-to-buffer

> Convert values to [Buffer](https://nodejs.org/api/buffer.html)

[![License](http://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/miguelmota/any-to-buffer/master/LICENSE)
[![NPM version](https://badge.fury.io/js/any-to-buffer.svg)](http://badge.fury.io/js/any-to-buffer)

## Install

```bash
npm install any-to-buffer
```

## Getting started

```javascript
const toBuffer = require('any-to-buffer')
const BN = require('bn.js')

console.log(toBuffer(256)) // <Buffer 01 00>
console.log(toBuffer(256, { size: 3 })) // <Buffer 00 01 00>
console.log(toBuffer('0x010203')) // <Buffer 01 02 03>
console.log(toBuffer('abc')) // <Buffer 61 62 63>
console.log(toBuffer(new BN(256))) // <Buffer 01 00>
```

## License

[MIT](LICENSE)
