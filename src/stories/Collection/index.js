import {storiesOf} from '@storybook/react'
import Chance from 'chance'
import * as R from 'ramda'
import {h} from '../../hyper-script'
import ModelList, {ModelListItem} from '../components/ModelListItem'

const createFakeModels = () => {
  const chance = new Chance(11)
  return R.times(() => ({name: chance.country({full: true})}), 10)
}

const models = createFakeModels()
const model = R.head(models)

storiesOf('Models', module)
  .add('ListItem', () => {
    return h(ModelListItem, {model})
  })
  .add('List', () => {
    return h(ModelList, {models})
  })
