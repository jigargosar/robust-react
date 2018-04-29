import {Typography, withStyles} from 'material-ui'
import {div, h} from '../hyper-script'
import {ModelExpansionPanelList} from './ModelExpansionPanelList'

export const CollectionList = withStyles({
  primary: {
    display: 'flex',
    alignItems: 'top',
    margin: '0 -2px',
    '& > *': {
      margin: '0 2px',
    },
  },
})(({collections, onClick, classes}) =>
  h(ModelExpansionPanelList, {
    models: collections,
    summaryRenderer: collection =>
      div({className: classes.primary}, [
        h(Typography, {variant: 'subheading'}, collection.name),
        h(Typography, {variant: 'caption'}, `(${collection.items.length})`),
      ]),
    onClick,
  }),
)
