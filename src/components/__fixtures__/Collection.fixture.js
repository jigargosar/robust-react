import Chance from 'chance'
import {times} from 'ramda'
import {Collection, StringField} from '../../models/Collection'
import {createFakeModels} from './Model.fixture'

export const createFakeCollections = () => {
  const chance = new Chance(11)
  return times(
    idx =>
      Collection({
        id: idx,
        name: chance.country({full: true}),
        fields: [StringField({name: 'Tags', initialValue: 'no-tag'})],
        items: createFakeModels(chance),
      }),
    3,
  )
}
