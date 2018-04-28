import Chance from 'chance'
import {times} from 'ramda'
import {createFakeModels} from './Model.fixture'

export const createFakeCollections = () => {
  const chance = new Chance(11)
  return times(
    idx => ({id: idx, name: chance.city(), items: createFakeModels()}),
    3,
  )
}
