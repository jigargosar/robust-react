import Chance from 'chance'
import {times} from 'ramda'
import {action, storiesOf} from '../../facade'
import {h} from '../../hyper-script'
import {ModelList} from './Model'
import {centerPaper} from './story-decorators/centerPaper'
// import 'dom-testing-library/extend-expect'
// import {render} from 'react-testing-library'
// import {describe, expect, it, specs, storiesOf} from '../../../../facade'

const chance = Chance(11)

const createCollection = id => ({
  id,
  name: chance.country({full: true}),
  itemCount: chance.integer({min: 3, max: 10}),
})

const createFakes = () => {
  return times(createCollection, 3)
}

storiesOf('Unified | Page', module)
  .addDecorator(centerPaper)
  .add('Collection', () => {
    return h(ModelList, {
      models: createFakes(),
      primary: c => `${c.name} (${c.itemCount})`,
      onClick: collection => e =>
        action('collectionClicked')(collection.name, e.type),
    })
  })
