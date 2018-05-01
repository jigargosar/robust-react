import {identity, map, reduce, times} from 'ramda'
import Chance from 'chance'
import {h} from '../../hyper-script'
import {Collection, Field, FT_BOOL, FT_STRING} from '../../models/Collection'
import {
  centerDecorator,
  linkTo,
  LinkTo,
  storiesOf,
} from '../../storybook-helpers'
import {CollectionList} from '../CollectionList'

export const chanceReduce = (chance, reducer, initialAcc) =>
  reduce(
    reducer,
    initialAcc,
    times(identity, chance.natural({min: 3, max: 10})),
  )

export const chanceTimes = (chance, fn) =>
  times(fn, chance.natural({min: 3, max: 10}))

const story = storiesOf('Demo|Collections', module).addDecorator(
  centerDecorator,
)

const names = [
  'Todos',
  'Notes',
  'Ideas',
  'Journal',
  'Bookmarks',
  'Browser Sessions',
]

const fields = [
  Field({
    id: 0,
    typeId: FT_BOOL,
    name: 'done',
    initialValue: 'false',
  }),
  Field({
    id: 1,
    typeId: FT_STRING,
    name: 'title',
    initialValue: 'What to do?',
  }),
]

const createCollectionItem = chance => ({
  done: chance.bool(),
  title: chance.sentence(),
})

const createCollectionItems = chance => collection =>
  chanceTimes(chance, () => createCollectionItem(chance, collection.fields))

const createCollectionFromName = chance => name => {
  const collection = Collection({name, fields})
  const collectionItems = createCollectionItems(chance)(collection)
  return Collection.addItems(collectionItems, collection)
}

story.add('index', () =>
  h(CollectionList, {
    collections: map(createCollectionFromName(new Chance(11)))(names),
    onClick: collection => linkTo('Demo|Collections', collection.name),
  }),
)

const linkToIndex = h(LinkTo, {story: 'index'}, 'Back')

story.add('todos', () => linkToIndex)
story.add('notes', () => linkToIndex)
