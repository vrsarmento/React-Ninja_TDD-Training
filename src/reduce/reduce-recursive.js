'use strict'

const isInitialValueUndefined = (initialValue) => initialValue === undefined

const reduce = (arr, func = (acc, item) => acc + item, initialValue) => {
  const acc = isInitialValueUndefined(initialValue) ? arr[0] : initialValue
  const arrCopy = isInitialValueUndefined(initialValue) ? arr.slice(1) : arr

  return (function reduceInternal(arrInternal, counter, accInternal) {
    const [head, ...tail] = arrInternal
    const accNext = () => func(accInternal, head, counter, arrCopy)
    return arrInternal.length === 0
      ? accInternal
      : reduceInternal(tail, counter + 1, accNext()) 
  })(arrCopy, 0, acc)
}

export default reduce