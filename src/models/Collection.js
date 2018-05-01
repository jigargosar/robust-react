import assert from 'assert'
import {
  append,
  contains,
  curry,
  defaultTo,
  flip,
  isNil,
  lensProp,
  over,
  reduce,
  when,
} from 'ramda'
import {IdGenerator} from './Id'

const collectionIdGen = IdGenerator(id => `collection(${id})`, 1)

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
  assert(isNil(id))

  const finalId = when(isNil, collectionIdGen.nextId)(id)
  return {
    id: finalId,
    fields,
    name: defaultTo(finalId)(name),
    items: defaultTo([])(items),
    itemIdGen: IdGenerator(itemId => `${finalId}item(${itemId})`, 1),
  }
}

const generateNextItemId = collection => collection.itemIdGen.nextId()

Collection.addItem = curry(({id, ...others}, collection) => {
  assert(isNil(id))

  const item = {id: generateNextItemId(collection), ...others}
  return over(lensProp('items'), append(item))(collection)
})

Collection.addItems = curry((items, collection) =>
  reduce(flip(Collection.addItem), collection)(items),
)
