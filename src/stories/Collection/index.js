import {storiesOf} from '@storybook/react'
import Chance from 'chance'
import * as R from 'ramda'
import {h} from '../../hyper-script'
import ModelList, {ModelListItem} from '../components/ModelListItem'

const createFakeCollectionModels = () => {
  const chance = new Chance(11)
  return R.times(() => ({name: chance.country({full: true})}), 10)
}

const models = createFakeCollectionModels()
const model = R.head(models)

storiesOf('Collection.Model', module)
  .add('ListItem', () => {
    return h(ModelListItem, {model})
  })
  .add('List', () => {
    return h(ModelList, {models})
  })
