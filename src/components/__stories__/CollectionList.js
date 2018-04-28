import {centerPaper} from '../../centerPaper'
import {h} from '../../hyper-script'
import {linkTo, storiesOf} from '../../test-helpers'
import {createFakeCollections} from '../__fixtures__/Collection.fixture'
import {CollectionList} from '../CollectionList'

const story = storiesOf('Components | CollectionList', module).addDecorator(
  centerPaper,
)

story.add('basic', () =>
  h(CollectionList, {
    collections: createFakeCollections(),
    onClick: c => e => linkTo('Components | Collection', 'basic')(c, e),
  }),
)
