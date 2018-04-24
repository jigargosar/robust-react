import {Chance} from 'chance'
import {times} from 'ramda'
import {storiesOf} from '../../facade'
import {h} from '../../hyper-script'
import {ModelList} from './Model'
import {centerPaper} from './story-decorators/centerPaper'
// import 'dom-testing-library/extend-expect'
// import {render} from 'react-testing-library'
// import {describe, expect, it, specs, storiesOf} from '../../../../facade'

const createFakes = () => {
  const chance = Chance(11)
  return times(idx => ({id: idx, name: chance.country({full: true})}), 3)
}

storiesOf('Unified | Page', module)
  .addDecorator(centerPaper)
  .add('Collection', () => {
    return h(ModelList, {models: createFakes()})
  })
