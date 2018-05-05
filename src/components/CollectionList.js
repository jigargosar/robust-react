import {
  Button,
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Typography,
  withStyles,
} from 'material-ui'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import {compose} from 'ramda'
import {setDisplayName} from 'recompose'
import {h, pre} from '@jigargosar/utils'
import {KeyedModels} from './ui/KeyedModels'
import {FlexRow} from './ui/FlexRow'

export const CollectionDetail = compose(
  withStyles({
    root: {},
    code: {
      overflow: 'auto',
    },
  }),
  setDisplayName('CollectionDetail'),
)(({collection, onClick = () => () => {}, classes}) =>
  h('div', {className: classes.root}, [
    h(Button, {onClick: onClick(collection)}, 'view'),
    pre({className: classes.code}, JSON.stringify(collection, null, 2)),
  ]),
)

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
      h(FlexRow, [
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
