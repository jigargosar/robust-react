import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import {
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
} from 'material-ui'
import {propOr} from 'ramda'
import {h} from '../hyper-script'
import {KeyedModels} from './KeyedModels'

const ExpansionPanelListItem = ({
  model,
  primaryRenderer = propOr('<primaryRenderer or name not found>', 'name'),
  onClick = () => () => {},
}) =>
  // h(MenuItem, {onClick: onClick(model)}, [
  //   h(ListItemText, {primary: primaryRenderer(model)}),
  // ])
  h(ExpansionPanel, [
    h(ExpansionPanelSummary, {expandIcon: h(ExpandMoreIcon)}, [
      primaryRenderer(model),
    ]),
    h(ExpansionPanelDetails, {onClick}, [primaryRenderer(model)]),
  ])

const ModelExpansionPanelList = props => {
  return h('div', [
    h(KeyedModels, {ModelComponent: ExpansionPanelListItem, ...props}),
  ])
}

export {ModelExpansionPanelList}
