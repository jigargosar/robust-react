// @flow

import {List, ListItemText, MenuItem} from 'material-ui'
import {h} from '../../../hyper-script'

export type Model = {
  id: string | number,
  name: string,
}

export type ModelListItemProps = {
  model: Model,
}

const ModelListItem = (props: ModelListItemProps) => {
  return h(MenuItem, [h(ListItemText, props.model.name)])
}

export type ModelListProps = {
  models: Array<Model>,
}

const ModelList = ({models}: ModelListProps) => {
  return h(List, models.map(model => h(ModelListItem, {key: model.id, model})))
}

export {ModelList, ModelListItem}
