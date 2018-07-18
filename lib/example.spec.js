let e = require('./example')

require('jest')

describe('foo', () => {
  it('adds 5', () => {
    expect(e.foo(5)).toEqual(10)
  })
})