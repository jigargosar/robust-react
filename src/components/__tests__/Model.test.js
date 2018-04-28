import Chance from 'chance'
import 'dom-testing-library/extend-expect'
import {times} from 'ramda'
import {h} from '../../hyper-script'
import {getRendered} from '../../test-helpers'
import {ModelList} from '../Model'

const createFakes = () => {
  const chance = new Chance(11)
  return times(idx => ({id: idx, name: chance.country({full: true})}), 3)
}

describe('Components', () => {
  describe('ModelList', () => {
    it('it should render without crashing', () => {
      expect(
        getRendered(h(ModelList, {models: createFakes()})),
      ).toMatchSnapshot()
    })
  })
})
