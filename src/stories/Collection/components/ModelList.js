// @flow

import {List, ListItemText, MenuItem} from 'material-ui'
import {div, h} from '../../../hyper-script'

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

export type ModelDetailProps = ModelListItemProps

const ModelDetail = ({model}: ModelDetailProps) => {
  return div([div(model.id), div(model.name)])
}

export {ModelList, ModelListItem, ModelDetail}
