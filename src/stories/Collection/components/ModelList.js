// @flow

import {List, ListItemText, MenuItem} from 'material-ui'
import {div, h} from '../../../hyper-script'
import type {Model} from '../types'

type ModelListItemProps = {
  model: Model,
}

const ModelListItem = (props: ModelListItemProps) => {
  return h(MenuItem, [h(ListItemText, props.model.name)])
}

type ModelListProps = {
  models: Array<Model>,
}

const ModelList = ({models}: ModelListProps) => {
  return h(List, models.map(model => h(ModelListItem, {key: model.id, model})))
}

type ModelDetailProps = ModelListItemProps

const ModelDetail = ({model}: ModelDetailProps) => {
  return div([div(model.id), div(model.name)])
}

export type {ModelListItemProps, ModelDetailProps, ModelListProps}
export {ModelList, ModelListItem, ModelDetail}
