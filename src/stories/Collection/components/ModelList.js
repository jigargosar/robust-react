// @flow

import {List, ListItemText, MenuItem} from 'material-ui'
import {div, h} from '../../../hyper-script'
import type {CollectionOrModel} from '../types'
import {displayName} from '../types'

type ModelListItemProps = {
  model: CollectionOrModel,
}

const ModelListItem = (props: ModelListItemProps) => {
  return h(MenuItem, [h(ListItemText, displayName(props.model))])
}

type ModelListProps = {
  models: Array<CollectionOrModel>,
}

const ModelList = ({models}: ModelListProps) => {
  return h(List, models.map(model => h(ModelListItem, {key: model.id, model})))
}

type ModelDetailProps = ModelListItemProps

const ModelDetail = ({model}: ModelDetailProps) => {
  return div([div(model.id), div(displayName(model))])
}

export type {ModelListItemProps, ModelDetailProps, ModelListProps}
export {ModelList, ModelListItem, ModelDetail}
