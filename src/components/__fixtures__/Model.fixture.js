import Chance from 'chance'
import {times} from 'ramda'

export const createFakeModels = (chance = new Chance(11)) => {
  return times(
    idx => ({id: idx, name: chance.country({full: true})}),
    chance.integer({min: 3, max: 5}),
  )
}
