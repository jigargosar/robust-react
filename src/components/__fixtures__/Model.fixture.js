import Chance from 'chance'
import 'dom-testing-library/extend-expect'
import {times} from 'ramda'

export const createFakeModels = () => {
  const chance = new Chance(11)
  return times(idx => ({id: idx, name: chance.country({full: true})}), 3)
}
