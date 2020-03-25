'use strict'

import { expect } from 'chai'
import find from './find'

it('find should be a function', () => {
  expect(find).to.be.a('function')
})

it('find([1, 2, 3], (item) => item === 1) should return 1', () => {
  expect(find([1, 2, 3], (item) => item === 1)).to.be.equal(1)
})

it('find([1, 2, 3], (item) => item === 2) should return 2', () => {
  expect(find([1, 2, 3], (item) => item === 2)).to.be.equal(2)
})

it('find([1, 2, 3], (item) => item > 3) should return undefined', () => {
  expect(find([1, 2, 3], (item) => item > 3)).to.be.equal(undefined)
})

it('find([1, 2, 3], (item, index) => index === 1) should return 2', () => {
  expect(find([1, 2, 3], (item, index) => index === 1)).to.be.equal(2)
})

it('find([1, 2, 3], (item, index, arr) => arr.length * item > 6) should return 3', () => {
  expect(find([1, 2, 3], (item, index, arr) => arr.length * item > 6)).to.be.equal(3)
})