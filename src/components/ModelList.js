import {List, ListItemText, MenuItem} from 'material-ui'
import {map, propOr} from 'ramda'
import {h} from '../hyper-script'

const ModelListItem = ({
  model,
  primaryRenderer = propOr('<primaryRenderer or name not found>', 'name'),
  onClick = () => () => {},
}) =>
  h(MenuItem, {onClick: onClick(model)}, [
    h(ListItemText, {primary: primaryRenderer(model)}),
  ])

const ModelList = ({models, ...other}) =>
  h(List, map(model => h(ModelListItem, {model, ...other}), models))

export {ModelList}
