import {List, ListItemText, MenuItem} from 'material-ui'
import {propOr} from 'ramda'
import {h} from '../hyper-script'
import {KeyedModels} from './KeyedModels'

const ModelListItem = ({
  model,
  primaryRenderer = propOr('<primaryRenderer or name not found>', 'name'),
  onClick = () => () => {},
}) =>
  h(MenuItem, {onClick: onClick(model)}, [
    h(ListItemText, {primary: primaryRenderer(model)}),
  ])

const ModelList = props => {
  return h(List, [h(KeyedModels, {ModelComponent: ModelListItem, ...props})])
}

export {ModelList}