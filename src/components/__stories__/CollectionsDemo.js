import {map} from 'ramda'
import {centerPaper} from '../../centerPaper'
import {h} from '../../hyper-script'
import {Collection} from '../../models/Collection'
import {linkTo, LinkTo, storiesOf} from '../../storybook-helpers'
import {CollectionList} from '../CollectionList'

const story = storiesOf('Demo|Collections', module).addDecorator(centerPaper)

const names = [
  'todos',
  'notes',
  'ideas',
  'journal',
  'bookmarks',
  'browserSessions',
]

const createCollectionsFromNames = map(name => Collection({name}))

story.add('index', () =>
  h(CollectionList, {
    collections: createCollectionsFromNames(names),
    onClick: collection => linkTo('Demo|Collections', collection.name),
  }),
)

const createStoryFromNames = map(name => {
  story.add(name, () => h(LinkTo, {story: 'index'}, 'Back'))
})

createStoryFromNames(names)
