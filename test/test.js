const test = require('tape')
const BN = require('bn.js')
const { randomBytes } = require('crypto')
const toBuffer = require('../')

test('anyToBuffer', t => {
  t.plan(10)

  t.equal(Buffer.compare(toBuffer(), Buffer.alloc(0)), 0)
  t.equal(Buffer.compare(toBuffer(null), Buffer.alloc(0)), 0)
  t.equal(Buffer.compare(toBuffer({}), Buffer.alloc(0)), 0)
  t.equal(Buffer.compare(toBuffer(256), Buffer.from([0x01, 0x00])), 0)
  t.equal(Buffer.compare(toBuffer(256, { size: 3 }), Buffer.from([0x00, 0x01, 0x00])), 0)
  t.equal(Buffer.compare(toBuffer('0x010203'), Buffer.from([0x01, 0x02, 0x03])), 0)
  t.equal(Buffer.compare(toBuffer('abc'), Buffer.from([0x61, 0x62, 0x63])), 0)
  t.equal(Buffer.compare(toBuffer(new BN(256)), Buffer.from([0x01, 0x00])), 0)
  t.equal(Buffer.compare(toBuffer(Buffer.from('abc')), Buffer.from('abc')), 0)

  const bytes = randomBytes(10)
  t.equal(Buffer.compare(toBuffer(bytes), bytes), 0)
})
