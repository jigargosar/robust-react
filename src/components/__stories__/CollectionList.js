import {h} from '@jigargosar/utils'
import {centerDecorator, linkTo, storiesOf} from '../../storybook-helpers'
import {createFakeCollections} from '../__fixtures__/Collection.fixture'
import {CollectionList} from '../CollectionList'

const story = storiesOf('Components|CollectionList', module).addDecorator(
  centerDecorator,
)

story.add('with item count', () =>
  h(CollectionList, {
    collections: createFakeCollections(),
    onClick: () =>
      linkTo('Components|CollectionItemList', 'with items as list'),
  }),
)
