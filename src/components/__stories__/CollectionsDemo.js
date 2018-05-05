import {
  compose,
  cond,
  identity,
  map,
  mergeAll,
  objOf,
  propEq,
  reduce,
  times,
} from 'ramda'
import Chance from 'chance'
import {h} from '@jigargosar/utils'
import {AppBar, IconButton, Toolbar, Typography} from 'material-ui'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import {Fragment} from 'react'
import {
  CollectionModel,
  Field,
  FT_BOOL,
  FT_STRING,
} from '../../models/CollectionModel'
import {centerDecorator, linkTo, storiesOf} from '../../storybook-helpers'
import {CollectionDetail, CollectionList} from '../CollectionList'
import {Collection} from '../Collection'

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

const isFieldTypeId = typeId => propEq('typeId', typeId)

const generateFakeItemDataForFields = chance =>
  compose(
    mergeAll,
    map(field =>
      compose(
        objOf(field.name),
        cond([
          [isFieldTypeId(FT_BOOL), () => chance.bool()],
          [isFieldTypeId(FT_STRING), () => chance.sentence()],
        ]),
      )(field),
    ),
  )

const createCollectionItems = chance => collection =>
  chanceTimes(chance, () =>
    generateFakeItemDataForFields(chance)(collection.fields),
  )

const createCollectionFromName = chance => name => {
  const collection = CollectionModel({name, fields})
  const collectionItems = createCollectionItems(chance)(collection)
  return CollectionModel.addItems(collectionItems, collection)
}

const linkToCollection = collection =>
  linkTo('Demo|Collections', collection.name)

const linkToIndex = linkTo('Demo|Collections', 'index')

const collections = map(createCollectionFromName(new Chance(11)))(names)
story.add('index', () =>
  h(CollectionList, {
    collections,
    onClick: linkToCollection,
  }),
)

const renderWithBackButtonAndTitle = (onClickBack, title, st) => {
  return h(Fragment, [
    h(AppBar, {position: 'static'}, [
      h(Toolbar, [
        h(IconButton, {onClick: onClickBack, color: 'inherit'}, [
          h(ArrowBackIcon),
        ]),
        h(Typography, {variant: 'title', color: 'inherit'}, [title]),
      ]),
    ]),
    st,
  ])
}

story.add('Todos', () =>
  renderWithBackButtonAndTitle(
    linkToIndex,
    'Todos',
    h(Collection, {collection: collections[0]}),
  ),
)
story.add('Notes', () =>
  renderWithBackButtonAndTitle(
    linkToIndex,
    'Notes',
    h(Collection, {collection: collections[1]}),
  ),
)

story.add('collection detail', () =>
  h(CollectionDetail, {
    collection: collections[0],
    onClick: linkToCollection,
  }),
)
