import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import {
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
} from 'material-ui'
import {propOr} from 'ramda'
import {h, pre} from 'utils/src/hyper-script-utils'
import {KeyedModels} from './KeyedModels'

const ExpansionPanelListItem = ({
  model,
  summaryRenderer = propOr('<summaryRenderer and name not found>', 'name'),
  detailsRenderer = info => pre(JSON.stringify(info, null, 2)),
}) =>
  h(ExpansionPanel, [
    h(ExpansionPanelSummary, {expandIcon: h(ExpandMoreIcon)}, [
      summaryRenderer(model),
    ]),
    h(ExpansionPanelDetails, [detailsRenderer(model)]),
  ])

const ModelExpansionPanelList = props => {
  return h('div', [
    h(KeyedModels, {ModelComponent: ExpansionPanelListItem, ...props}),
  ])
}

export {ModelExpansionPanelList}
