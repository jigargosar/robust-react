import {storiesOf} from '@storybook/react'
import Chance from 'chance'
import {ListItemText, MenuItem} from 'material-ui'
import {head} from 'ramda'
import React from 'react'
import {h} from '../hyper-script'

const createFakeCollectionModels = () => {
  const chance = new Chance(11)
  return [{name: chance.country({full: true})}]
}

const ModelListItem = ({model: {name}}) => (
  <MenuItem>
    {' '}
    <ListItemText>{name}</ListItemText>{' '}
  </MenuItem>
)

const models = createFakeCollectionModels()
const model = head(models)

storiesOf('Collection', module)
  .add('List', () => {
    return h(ModelListItem, {model})
  })
  .add('ListItem', () => {
    return h(ModelListItem, {model})
  })
