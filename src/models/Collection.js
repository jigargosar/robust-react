import assert from 'assert'
import {contains, curry, defaultTo, isNil, when} from 'ramda'
import {IdGenerator} from './Id'

const idGen = IdGenerator('Collection', 1)

const FT_STRING = 'string'
const FT_BOOL = 'boolean'

const FieldTypes = [FT_STRING, FT_BOOL]

const Field = curry((typeId, {name, initialValue}) => {
  assert(!isNil(name))
  assert(!isNil(initialValue))
  assert(contains(typeId)(FieldTypes))
  return {typeId, name, initialValue}
})
export const StringField = Field(FT_STRING)
export const BooleanField = Field(FT_BOOL)

export const Collection = ({id, name, fields = [], items} = {}) => {
  const finalId = when(isNil, idGen.nextId)(id)
  return {
    id: finalId,
    fields,
    name: defaultTo(finalId)(name),
    items: defaultTo([])(items),
  }
}
