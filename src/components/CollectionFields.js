import {Table, TableBody, TableCell, TableRow} from 'material-ui'
import {h} from '../hyper-script'
import {ModelList} from './ModelList'

export const CollectionFields = ({collection}) =>
  h(ModelList, {
    models: collection.fields,
    primaryRenderer: item =>
      h(Table, [
        h(TableBody, [
          h(TableRow, [
            h(TableCell, item.name),
            h(TableCell, item.typeId),
            h(TableCell, item.initialValue),
          ]),
        ]),
      ]),
  })
