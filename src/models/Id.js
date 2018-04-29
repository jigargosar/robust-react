import {isNil} from 'ramda'

const assert = require('assert')

export const IdGenerator = (prefix, seed = 1) => {
  assert(!isNil(prefix))
  let nextId = seed
  const idWithPrefix = id => `${prefix}-Id:${id}`
  return {
    nextId: () => {
      const id = nextId
      nextId++
      return idWithPrefix(id)
    },
    lastId: () => idWithPrefix(nextId - 1),
  }
}
