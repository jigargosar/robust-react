import {Table, TableBody, TableCell, TableRow} from 'material-ui'
import {h} from '../hyper-script-utils'
import {ModelList} from './ModelList'

export const CollectionItemList = ({collection}) =>
  h(ModelList, {
    models: collection.items,
    primaryRenderer: item =>
      h(Table, [
        h(TableBody, [
          h(TableRow, [h(TableCell, item.id), h(TableCell, item.name)]),
        ]),
      ]),
  })
