import {head} from 'ramda'
import {centerPaper} from '../../centerPaper'
import {h} from '../../hyper-script'
import {storiesOf} from '../../storybook-helpers'
import {createFakeCollections} from '../__fixtures__/Collection.fixture'
import {CollectionItemList} from '../CollectionItemList'

const story = storiesOf('Components|CollectionItemList', module).addDecorator(
  centerPaper,
)

story.add('with items as list', () =>
  h(CollectionItemList, {
    collection: head(createFakeCollections()),
  }),
)
