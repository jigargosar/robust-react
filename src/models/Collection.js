import assert from 'assert'
import {contains, curry, defaultTo, isNil, when} from 'ramda'
import {IdGenerator} from './Id'

const idGen = IdGenerator('Collection', 1)

export const FT_STRING = 'string'
export const FT_BOOL = 'boolean'

const FieldTypes = [FT_STRING, FT_BOOL]

export const Field = curry(({id, typeId, name, initialValue}) => {
  assert(!isNil(id))
  assert(!isNil(name))
  assert(!isNil(initialValue))
  assert(contains(typeId)(FieldTypes))
  return {id, typeId, name, initialValue}
})

export const Collection = ({id, name, fields = [], items} = {}) => {
  const finalId = when(isNil, idGen.nextId)(id)
  return {
    id: finalId,
    fields,
    name: defaultTo(finalId)(name),
    items: defaultTo([])(items),
  }
}
