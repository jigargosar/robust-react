/* eslint-disable no-console */

import {
  Card,
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Typography,
  withStyles,
} from 'material-ui'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import {div, h, pre} from '../hyper-script'
import {KeyedModels} from './KeyedModels'

const CollectionDetail = ({collection}) =>
  h(Card, [pre(JSON.stringify(collection, null, 2))])

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
  h(ExpansionPanel, [
    h(ExpansionPanelSummary, {expandIcon: h(ExpandMoreIcon)}, [
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
      ]),
    ]),
    h(ExpansionPanelDetails, [h(CollectionDetail, {collection})]),
  ]),
)

export const CollectionList = ({collections}) =>
  h('div', [
    h(KeyedModels, {
      ModelComponent: CollectionExpansionPanel,
      models: collections,
    }),
  ])
