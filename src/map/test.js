'use strict'

const map = (arr = [], func = (item) => item) => {
  if (arr.length === 0) {
    return []
  }

  let newArr = []
  const [head, ...tail] = arr
  newArr.push(func(head), ...map(tail, func))
  return newArr
}

export default map

//map([1,2], (item)=>item+1)