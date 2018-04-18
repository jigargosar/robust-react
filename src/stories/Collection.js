import {storiesOf} from '@storybook/react'
import Chance from 'chance'
import {ListItemText, MenuItem} from 'material-ui'
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

storiesOf('Collection', module)
  .add('List', () => {
    const model = createFakeCollectionModels()[0]
    return h(ModelListItem, {model})
  })
  .add('ListItem', () => {
    const model = createFakeCollectionModels()[0]
    return h(ModelListItem, {model})
  })
