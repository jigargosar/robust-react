import {defaultTo, isNil, when} from 'ramda'
import {IdGenerator} from './Id'

const idGen = IdGenerator('Collection', 1)

export const Collection = ({id, name, items} = {}) => {
  const finalId = when(isNil, idGen.nextId)(id)
  return {
    id: finalId,
    name: defaultTo(finalId)(name),
    items: defaultTo([])(items),
  }
}
