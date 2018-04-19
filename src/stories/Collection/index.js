import {storiesOf} from '@storybook/react'
import Chance from 'chance'
import {Paper} from 'material-ui'
import * as R from 'ramda'
import {div, h} from '../../hyper-script'
import ModelList, {ModelListItem} from '../components/ModelListItem'

const createFakeModels = () => {
  const chance = new Chance(11)
  return R.times(() => ({name: chance.country({full: true})}), 15)
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
  .add('PaperList', () => {
    return div({style: {textAlign: 'center', backgroundColor: '#ddd'}}, [
      h(Paper, {style: {margin: 'auto', maxWidth: 450}}, [
        h(ModelList, {models}),
      ]),
    ])
  })
