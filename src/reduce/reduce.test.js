'use strict'

import { expect } from 'chai'
import reduce from './reduce'

it('reduce should be a function', () => {
  expect(reduce).to.be.a('function')
})

it('reduce([1, 2, 3]) should return 6)', () => {
  expect(reduce([1, 2, 3])).to.be.equal(6)
})

it('reduce([1, 2, 3, 4]) should return 10)', () => {
  expect(reduce([1, 2, 3, 4])).to.be.equal(10)
})

it('reduce([1, 2, 3, 4], (acc, item) => acc + item, 1) should return 11)', () => {
  const before = reduce([1, 2, 3, 4], (acc, item) => acc + item, 1)
  const after = 11
  expect(before).to.be.equal(after)
})

it('reduce([1, 2, 3, 4], (acc, item) => acc * item, 1) should return 24)', () => {
  const before = reduce([1, 2, 3, 4], (acc, item) => acc * item, 1)
  const after = 24
  expect(before).to.be.equal(after)
})

it('reduce([1, 2, 3], (acc, item) => { acc["index" + item] = item; return acc }, {}) should return { index1: 1, index2: 2, index3: 3 })', () => {
  const before = reduce([1, 2, 3],
    (acc, item) => { acc['index' + item] = item; return acc }, {})
  const after = { index1: 1, index2: 2, index3: 3 }
  expect(before).to.be.deep.equal(after)
})

it('reduce([1, 2, 3], (acc, item, index) => acc + index, 0) should return 3)', () => {
  const before = reduce([1, 2, 3], (acc, item, index) => acc + index, 0)
  const after = 3
  expect(before).to.be.equal(after)
})

it('reduce([1, 2, 3], (acc, item, index, arr) => acc + arr[index], 0) should return 6)', () => {
  const before = reduce([1, 2, 3], (acc, item, index, arr) => acc + arr[index], 0)
  const after = 6
  expect(before).to.be.equal(after)
})