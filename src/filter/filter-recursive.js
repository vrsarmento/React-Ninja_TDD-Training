'use strict'

/* const filter = (arr = [], func = (item) => item) => {
  let counter = 0
  const filterInternal = (arrInternal) => {
    if(arrInternal.length === 0)
      return []
    const [head, ...tail] = arrInternal
    if(func(head, counter++, arr))
      return [head].concat(filterInternal(tail))
    else
      return filterInternal(tail)
  }

  return filterInternal(arr)
} */

// Refactoring
const filter = (arr = [], func = (item) => item) => {
  return (function filterInternal (arrInternal, counter) {
    const [head, ...tail] = arrInternal
    return arrInternal.length === 0 
      ? []
      : (func(head, counter, arr) 
        ? [head] 
        : []
      ).concat(filterInternal(tail, counter + 1))
  })(arr, 0)
}

export default filter