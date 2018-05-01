import {Typography, withStyles} from 'material-ui'
import {div, h} from '../hyper-script'
import {ModelExpansionPanelList} from './ModelExpansionPanelList'

export const CollectionList = withStyles({
  container: {
    display: 'flex',
    margin: '0 -2px',
    '&>$item': {
      margin: '0 2px',
    },
  },
  item: {},
})(({collections, onClick, classes}) =>
  h(ModelExpansionPanelList, {
    models: collections,
    summaryRenderer: collection =>
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
    onClick,
  }),
)
