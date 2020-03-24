'use strict'

// Functional Method
const map = (arr = [], func = (item) => item) => {
  if (!Array.isArray(arr))
    throw new TypeError('The first parameter must be an array')

  if (typeof func !== 'function')
    throw new TypeError('The second parameter must be a function')

  // Creating a closure
  return (function mapInternal(arrInternal, counter) {
    const [head, ...tail] = arrInternal
    return arrInternal.length === 0 ? [] : [
      func(head, counter, arr),
      ...mapInternal(tail, counter + 1)
    ]
  })(arr, 0)
}

export default map