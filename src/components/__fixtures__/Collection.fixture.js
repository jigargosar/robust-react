import Chance from 'chance'
import {times} from 'ramda'
import {Collection, Field, FT_BOOL, FT_STRING} from '../../models/Collection'
import {createFakeModels} from './Model.fixture'

export const createFakeCollections = () => {
  const chance = new Chance(11)
  return times(
    idx =>
      Collection({
        id: idx,
        name: chance.country({full: true}),
        fields: [
          Field({
            id: 0,
            typeId: FT_STRING,
            name: 'tags',
            initialValue: 'no-tag',
          }),
          Field({
            id: 1,
            typeId: FT_BOOL,
            name: 'archived',
            initialValue: 'false',
          }),
        ],
        items: createFakeModels(chance),
      }),
    3,
  )
}
