import {compose, map, pluck} from 'ramda'
import Props from 'prop-types'
import {setDisplayName} from 'recompose'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  withStyles,
} from 'material-ui'
import cn from 'classnames'
import {h} from '../../../packages/utils/index'
import {KeyedModels} from './KeyedModels'

const enhance = compose(
  withStyles(() => ({
    root: {},
  })),
  setDisplayName('ConfigurableTable'),
)

const renderTableCell = (key, tableCellProps, val) =>
  h(TableCell, {key, ...tableCellProps}, `${val}`)

const Row = ({row, columns, tableCellProps}) =>
  h(TableRow, [
    compose(
      map(rowKey => renderTableCell(rowKey, tableCellProps, row[rowKey])),
      pluck('rowKey'),
    )(columns),
  ])

const ConfigurableTable = enhance(
  ({rows, columns, className, tableCellProps, classes}) =>
    h(Table, {className: cn(classes.root, className)}, [
      h(TableHead, [
        h(TableRow, [
          compose(
            map(label => renderTableCell(label, tableCellProps, label)),
            pluck('label'),
          )(columns),
        ]),
      ]),
      h(TableBody, [
        h(KeyedModels, {
          ModelComponent: Row,
          models: rows,
          getProps: ({model}) => ({row: model, columns, tableCellProps}),
        }),
      ]),
    ]),
)

ConfigurableTable.propTypes = {
  className: Props.string,
}

export {ConfigurableTable}
