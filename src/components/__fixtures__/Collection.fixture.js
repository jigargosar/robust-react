import Chance from 'chance'
import {times} from 'ramda'
import {BooleanField, Collection, StringField} from '../../models/Collection'
import {createFakeModels} from './Model.fixture'

export const createFakeCollections = () => {
  const chance = new Chance(11)
  return times(
    idx =>
      Collection({
        id: idx,
        name: chance.country({full: true}),
        fields: [
          StringField({name: 'tags', initialValue: 'no-tag'}),
          BooleanField({name: 'archived', initialValue: 'false'}),
        ],
        items: createFakeModels(chance),
      }),
    3,
  )
}
