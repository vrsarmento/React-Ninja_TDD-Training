'use strict'

const reverse = (arr) => {
  const tail = arr[arr.length - 1]
  const head = arr.slice(0, -1)
  return arr.length === 0 ? [] : [
    tail,
    ...reverse(head)
  ]
}

export default reverse