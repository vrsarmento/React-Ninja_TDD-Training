'use strict'

// Imperative Method
const map = (array = [], func = (item) => item) => {
  if (!Array.isArray(array))
    throw new TypeError('The first parameter must be an array')

  if (typeof func !== 'function')
    throw new TypeError('The second parameter must be a function')

  let mapped = []
  for (let i = 0; i < array.length; i++) {
    mapped.push(func(array[i], i, array))
  }
  return mapped
}

export default map