import {isNil} from 'ramda'

const assert = require('assert')

export const IdGenerator = (mapId, seed = 1) => {
  assert(!isNil(mapId))
  let nextId = seed
  return {
    nextId: () => {
      const id = nextId
      nextId++
      return mapId(id)
    },
  }
}
