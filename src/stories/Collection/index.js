import {storiesOf} from '@storybook/react'
import Chance from 'chance'
import {Paper} from 'material-ui'
import * as R from 'ramda'
import {div, h} from '../../hyper-script'
import ModelList, {ModelListItem} from './components/ModelListItem'

const createFakeModels = () => {
  const chance = new Chance(11)
  return R.times(idx => ({id: idx, name: chance.country({full: true})}), 3)
}

const models = createFakeModels()
const model = R.head(models)

storiesOf('Models', module)
  .addDecorator(story =>
    div(
      {
        style: {
          padding: '16px 0',
          backgroundColor: '#ddd',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        },
      },
      [div({style: {flex: 1, maxWidth: 300}}, [h(Paper, [story()])])],
    ),
  )
  .add('ListItem', () => h(ModelListItem, {model}))
  .add('List', () => h(ModelList, {models}))
// .add('PaperList', () => h(Paper, [h(ModelList, {models})]))
