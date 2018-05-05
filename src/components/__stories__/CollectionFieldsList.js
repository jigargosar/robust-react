import {head} from 'ramda'
import {h} from 'utils/src/hyper-script-utils'
import {centerDecorator, storiesOf} from '../../storybook-helpers'
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
