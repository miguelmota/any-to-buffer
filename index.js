const BN = require('bn.js')
const normalizeHex = require('normalize-hex')

function anyToBuffer (data, opts) {
  opts = {
    size: 0,
    ...opts
  }

  let result = Buffer.alloc(0)
  if (!data) return result

  if (typeof data === 'number') {
    let hex = data.toString(16)
    if (hex.length % 2) {
      hex = `0${hex}`
    }
    result = Buffer.from(hex, 'hex')
  } if (typeof data === 'string') {
    const hex = data.startsWith('0x')
      ? normalizeHex(data, { evenLength: true })
      : null

    if (hex) {
      result = Buffer.from(hex, 'hex')
    } else {
      result = Buffer.from(data, 'utf8')
    }
  } else if (typeof data === 'boolean') {
    result = Buffer.alloc(1, data ? 1 : 0)
  } else if (typeof data === 'object') {
    if (Buffer.isBuffer(data)) {
      result = data
    } else if (BN.isBN(data)) {
      const hex = normalizeHex(data.toString(16), { evenLength: true })
      result = Buffer.from(hex, 'hex')
    } else if (data instanceof Uint8Array) {
      result = Buffer.from([
        ...data
      ])
    }
  }

  if (Buffer.isBuffer(result) && opts.size > result.length) {
    result = Buffer.concat([
      Buffer.alloc(opts.size - result.length, 0),
      result
    ])
  }

  return result
}

module.exports = anyToBuffer
