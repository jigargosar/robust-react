/* eslint-disable no-console */

import {
  Button,
  Card,
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Typography,
  withStyles,
} from 'material-ui'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import {compose} from 'ramda'
import {setDisplayName} from 'recompose'
import {div, h, pre} from 'utils/src/hyper-script-utils'
import {KeyedModels} from './KeyedModels'

export const CollectionDetail = compose(
  withStyles({
    root: {
      overflow: 'auto',
    },
  }),
  setDisplayName('CollectionDetail'),
)(({collection, onClick = () => () => {}, classes}) => {
  // // eslint-disable-next-line no-debugger
  // debugger
  return h(Card, {className: classes.root}, [
    h(Button, {onClick: onClick(collection)}, 'view'),
    pre(JSON.stringify(collection, null, 2)),
  ])
})

const CollectionExpansionPanel = compose(
  withStyles({
    container: {
      display: 'flex',
      margin: '0 -2px',
      '&>$item': {
        margin: '0 2px',
      },
    },
    item: {},
  }),
  setDisplayName('CollectionDetail'),
)(({model: collection, onClick, classes}) =>
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
    h(ExpansionPanelDetails, [h(CollectionDetail, {collection, onClick})]),
  ]),
)

export const CollectionList = ({collections, onClick}) =>
  h('div', [
    h(KeyedModels, {
      ModelComponent: CollectionExpansionPanel,
      models: collections,
      onClick,
    }),
  ])
