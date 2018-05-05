import {head} from 'ramda'
import {h} from 'utils/src/hyper-script-utils'
import {centerDecorator, storiesOf} from '../../storybook-helpers'
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
