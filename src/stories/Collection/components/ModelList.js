// @flow

import {List, ListItemText, MenuItem} from 'material-ui'
import {h} from '../../../hyper-script'

type Model = {name: string}

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
  return h(
    List,
    models.map((model, idx) => h(ModelListItem, {key: idx, model})),
  )
}

export {ModelList, ModelListItem}
