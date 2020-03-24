'use strict'

import { expect } from 'chai'
import every from './every'

it('every should be a function', () => {
  expect(every).to.be.a('function')
})

it('every([], (item) => item) should return true', () => {
  expect(every([], (item) => item)).to.be.ok
})

it('every([0, 1, 2], (item) => item) should return false', () => {
  expect(every([0, 1, 2], (item) => item)).to.not.be.ok
})

it('every([1, 2, 3], (item) => item) should return true', () => {
  expect(every([1, 2, 3], (item) => item)).to.be.ok
})

it('every([1, 2], (item) => item > 0) should return true', () => {
  expect(every([1, 2], (item) => item > 0)).to.be.equal(true)
})

it('every([1, 2], (item) => item > 1) should return false', () => {
  expect(every([1, 2], (item) => item > 1)).to.be.equal(false)
})

it('every([1, 2, 3], (item, index) => index === item - 1) should return true', () => {
  expect(every([1, 2, 3], (item, index) => index === item - 1)).to.be.ok
})

it('every([1, 2, 3], (item, index, arr) => arr.length < item) should return false', () => {
  expect(every([1, 2, 3], (item, index, arr) => arr.length < item)).to.be.equal(false)
})

it('every([4, 5, 6], (item, index, arr) => arr.length < item) should return true', () => {
  expect(every([4, 5, 6], (item, index, arr) => arr.length < item)).to.be.equal(true)
})