import {head} from 'ramda'
import {centerDecorator, storiesOf} from '../../storybook-helpers'
import {h} from '../../hyper-script-utils'
import {createFakeCollections} from '../__fixtures__/Collection.fixture'
import {CollectionFields} from '../CollectionFields'

const story = storiesOf('Components|CollectionFields', module).addDecorator(
  centerDecorator,
)

story.add('with fields as list', () =>
  h(CollectionFields, {
    collection: head(createFakeCollections()),
  }),
)
