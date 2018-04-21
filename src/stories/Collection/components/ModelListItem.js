import {List, ListItemText, MenuItem} from 'material-ui'
import {h} from '../../../hyper-script'

export const ModelListItem = ({model: {name}}) => {
  return h(MenuItem, [h(ListItemText, name)])
}

const ModelList = ({models}) => {
  return h(
    List,
    models.map((model, idx) => h(ModelListItem, {key: idx, model})),
  )
}

export default ModelList
