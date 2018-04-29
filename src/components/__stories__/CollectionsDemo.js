import {map} from 'ramda'
import {h} from '../../hyper-script'
import {Collection} from '../../models/Collection'
import {
  centerDecorator,
  linkTo,
  LinkTo,
  storiesOf,
} from '../../storybook-helpers'
import {CollectionList} from '../CollectionList'

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

const createCollectionsFromNames = map(name => Collection({name}))

story.add('index', () =>
  h(CollectionList, {
    collections: createCollectionsFromNames(names),
    onClick: collection => linkTo('Demo|Collections', collection.name),
  }),
)

const linkToIndex = h(LinkTo, {story: 'index'}, 'Back')

story.add('todos', () => linkToIndex)
story.add('notes', () => linkToIndex)
