import {List, ListItemText, MenuItem} from 'material-ui'
import Props from 'prop-types'
import {h} from '../../../hyper-script'

export const ModelListItem = ({model: {name}}) => {
  return h(MenuItem, [h(ListItemText, name)])
}

const modelShape = {
  name: Props.string.isRequired,
}
ModelListItem.propTypes = modelShape

const ModelList = ({models}) => {
  return h(
    List,
    models.map((model, idx) => h(ModelListItem, {key: idx, model})),
  )
}

ModelList.propTypes = {
  models: Props.arrayOf(Props.shape(modelShape)).isRequired,
}

export {ModelList}
