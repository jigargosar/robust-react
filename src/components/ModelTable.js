import {
  ListItem,
  ListItemText,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from 'material-ui'
import {map, propOr} from 'ramda'
import {h} from 'utils/src/hyper-script-utils'

const ModelRow = ({
  model,
  primaryRenderer = propOr('<primaryRenderer or name not found>', 'name'),
  onClick = () => () => {},
}) =>
  h(TableRow, {onClick: onClick(model)}, [
    h(TableCell, [
      h(ListItem, {button: true, onClick: onClick(model)}, [
        h(ListItemText, {primary: primaryRenderer(model)}),
      ]),
    ]),
  ])

const ModelTable = ({models, ...other}) =>
  h(Table, [h(TableBody, map(model => h(ModelRow, {model, ...other}), models))])

export {ModelTable}
