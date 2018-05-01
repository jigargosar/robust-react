import {compose, identity, map, reduce, times} from 'ramda'
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

const chanceReduce = (chance, reducer, initialAcc) =>
  reduce(
    reducer,
    initialAcc,
    times(identity, chance.natural({min: 3, max: 10})),
  )

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

const addCollectionItem = chance => collection =>
  Collection.addItem(
    {
      done: chance.bool(),
      title: chance.sentence(),
    },
    collection,
  )

const addCollectionItems = chance => collection =>
  chanceReduce(chance, addCollectionItem(chance), collection)

const createCollectionFromName = chance => name =>
  compose(addCollectionItems(chance), Collection)({
    name,
    fields,
  })

story.add('index', () =>
  h(CollectionList, {
    collections: map(createCollectionFromName(new Chance(11)))(names),
    onClick: collection => linkTo('Demo|Collections', collection.name),
  }),
)

const linkToIndex = h(LinkTo, {story: 'index'}, 'Back')

story.add('todos', () => linkToIndex)
story.add('notes', () => linkToIndex)
