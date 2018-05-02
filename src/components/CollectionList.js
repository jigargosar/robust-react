/* eslint-disable no-console */
import {
  Button,
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Typography,
  withStyles,
} from 'material-ui'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import {div, h, pre} from '../hyper-script'
import {KeyedModels} from './KeyedModels'

const CollectionExpansionPanel = withStyles({
  container: {
    display: 'flex',
    margin: '0 -2px',
    '&>$item': {
      margin: '0 2px',
    },
  },
  item: {},
})(({model: collection, classes}) =>
  h(ExpansionPanel, {onClick: e => console.warn('ExpansionPanel', e)}, [
    h(
      ExpansionPanelSummary,
      {
        onClick: e => console.warn('ExpansionPanelSummary', e),
        expandIcon: h(ExpandMoreIcon),
      },
      [
        div({className: classes.container}, [
          h(
            Typography,
            {className: classes.item, variant: 'subheading'},
            collection.name,
          ),
          h(
            Typography,
            {className: classes.item, variant: 'caption'},
            `(${collection.items.length})`,
          ),
          h(Button, {onClick: e => console.warn('Button', e)}, ['Hello']),
        ]),
      ],
    ),
    h(ExpansionPanelDetails, [pre(JSON.stringify(collection, null, 2))]),
  ]),
)
export const CollectionList = ({collections}) =>
  h('div', [
    h(KeyedModels, {
      ModelComponent: CollectionExpansionPanel,
      models: collections,
    }),
  ])
