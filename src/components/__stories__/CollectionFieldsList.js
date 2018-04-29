import {head} from 'ramda'
import {centerPaper} from '../../centerPaper'
import {h} from '../../hyper-script'
import {storiesOf} from '../../storybook-helpers'
import {createFakeCollections} from '../__fixtures__/Collection.fixture'
import {CollectionFields} from '../CollectionFields'

const story = storiesOf('Components|CollectionFields', module).addDecorator(
  centerPaper,
)

story.add('with fields as list', () =>
  h(CollectionFields, {
    collection: head(createFakeCollections()),
  }),
)
