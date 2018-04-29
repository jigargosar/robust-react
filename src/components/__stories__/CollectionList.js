import {map} from 'ramda'
import {centerPaper} from '../../centerPaper'
import {h} from '../../hyper-script'
import {Collection} from '../../models/Collection'
import {linkTo, storiesOf} from '../../test-helpers'
import {createFakeCollections} from '../__fixtures__/Collection.fixture'
import {CollectionList} from '../CollectionList'

const story = storiesOf('Components | CollectionList', module).addDecorator(
  centerPaper,
)

story.add('with item count', () =>
  h(CollectionList, {
    collections: createFakeCollections(),
    onClick: () => linkTo('Components | Collection', 'with item list'),
  }),
)

const names = [
  'todos',
  'notes',
  'ideas',
  'journal',
  'bookmarks',
  'browserSessions',
]

// const createCollectionsFromNames = addIndex(map)((name, id) => ({
//   id,
//   name,
//   items: [],
// }))

const createCollectionsFromNames = map(name => Collection({name}))

story.add('with featured collections', () =>
  h(CollectionList, {
    collections: createCollectionsFromNames(names),
  }),
)
