import {head} from 'ramda'
import {centerDecorator, storiesOf} from '../../storybook-helpers'
import {h} from '../../hyper-script'
import {createFakeCollections} from '../__fixtures__/Collection.fixture'
import {CollectionItemList} from '../CollectionItemList'

const story = storiesOf('Components|CollectionItemList', module).addDecorator(
  centerDecorator,
)

story.add('with items as list', () =>
  h(CollectionItemList, {
    collection: head(createFakeCollections()),
  }),
)
