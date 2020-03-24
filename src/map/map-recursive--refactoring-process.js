'use strict'

// 1st functional method
/* const map = (arr = [], func = (item) => item) => {
  if (!Array.isArray(arr))
    throw new TypeError('The first parameter must be an array')

  if (typeof func !== 'function')
    throw new TypeError('The second parameter must be a function')

  let counter = 0
  const mapInternal = (arrayInternal) => {
    if (arrayInternal.length === 0) {
      return []
    }
    const [head, ...tail] = arrayInternal
    return [func(head, counter++, arr)].concat(mapInternal(tail))
  }
  return mapInternal(arr)
} */

// 1st refactoring
/* const map = (arr = [], func = (item) => item) => {
  if (!Array.isArray(arr))
    throw new TypeError('The first parameter must be an array')

  if (typeof func !== 'function')
    throw new TypeError('The second parameter must be a function')

  let counter = 0
  return (function mapInternal(arrayInternal) {
    if (arrayInternal.length === 0)
      return []

    const [head, ...tail] = arrayInternal
    return [func(head, counter++, arr)].concat(mapInternal(tail))
  })(arr)
} */

/* // 2nd Refactoring
const map = (arr = [], func = (item) => item) => {
  if (!Array.isArray(arr))
    throw new TypeError('The first parameter must be an array')

  if (typeof func !== 'function')
    throw new TypeError('The second parameter must be a function')

  // Applying immutability
  const counter = 0
  return (function mapInternal(arrayInternal, counter) {
    if (arrayInternal.length === 0)
      return []

    const [head, ...tail] = arrayInternal
    return [func(head, counter, arr)].concat(mapInternal(tail, counter + 1))
  })(arr, counter)
} */

/* // 3rd Refactoring
const map = (arr = [], func = (item) => item) => {
  if (!Array.isArray(arr))
    throw new TypeError('The first parameter must be an array')

  if (typeof func !== 'function')
    throw new TypeError('The second parameter must be a function')

  return (function mapInternal(arrayInternal, counter) {
    if (arrayInternal.length === 0)
      return []

    const [head, ...tail] = arrayInternal
    return [func(head, counter, arr), ...mapInternal(tail, counter + 1)]
  })(arr, 0)
} */

// 4th Refactoring
const map = (arr = [], func = (item) => item) => {
  if (!Array.isArray(arr))
    throw new TypeError('The first parameter must be an array')

  if (typeof func !== 'function')
    throw new TypeError('The second parameter must be a function')

  return (function mapInternal(arrayInternal, counter) {
    const [head, ...tail] = arrayInternal
    return arrayInternal.length === 0 ? [] : [
      func(head, counter, arr),
      ...mapInternal(tail, counter + 1)
    ]
  })(arr, 0)
}

export default map