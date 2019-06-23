const toBuffer = require('../')
const BN = require('bn.js')

console.log(toBuffer(256)) // <Buffer 01 00>
console.log(toBuffer(256, { size: 3 })) // <Buffer 00 01 00>
console.log(toBuffer('0x010203')) // <Buffer 01 02 03>
console.log(toBuffer('abc')) // <Buffer 61 62 63>
console.log(toBuffer(Buffer.from('abc'))) // <Buffer 61 62 63>
console.log(toBuffer(new BN(256))) // <Buffer 01 00>
