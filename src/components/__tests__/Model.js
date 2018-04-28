import Chance from 'chance'
import {times} from 'ramda'
import {h} from '../../hyper-script'
import {ModelList} from '../Model'

// import 'dom-testing-library/extend-expect'
// import {render} from 'react-testing-library'
// import {describe, expect, it, specs, storiesOf} from '../../../../facade'

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
      h(ModelList, {models: createFakes()})
    })
  })
})
