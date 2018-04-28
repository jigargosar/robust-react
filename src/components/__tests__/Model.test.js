import Chance from 'chance'

import 'dom-testing-library/extend-expect'
import {times} from 'ramda'
import {render} from 'react-testing-library'
import {h} from '../../hyper-script'
import {ModelList} from '../Model'

const createFakes = () => {
  const chance = new Chance(11)
  return times(idx => ({id: idx, name: chance.country({full: true})}), 3)
}

describe('Components', () => {
  // describe("ModelListItem", ()=>{
  //   it("smoke",()=>{
  //     h(ModelListItem, {model: head(createFakes())})
  //   })
  // })

  describe('ModelList', () => {
    it('smoke', () => {
      expect(
        render(h(ModelList, {models: createFakes()})).firstChild,
      ).toMatchSnapshot()
    })
  })
})
