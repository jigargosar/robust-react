import {head} from 'ramda'
import {centerPaper} from '../../centerPaper'
import {h} from '../../hyper-script'
import {storiesOf} from '../../test-helpers'
import {createFakeCollections} from '../__fixtures__/Collection.fixture'
import {Collection} from '../Collection'

const story = storiesOf('Components | Collection', module).addDecorator(
  centerPaper,
)

story.add('tabular', () =>
  h(Collection, {
    collection: head(createFakeCollections()),
  }),
)
