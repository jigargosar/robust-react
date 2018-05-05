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
import {h} from '@jigargosar/utils'
import {KeyedModels} from './KeyedModels'

const enhance = compose(
  withStyles(() => ({
    root: {},
  })),
  setDisplayName('ConfigurableTable'),
)

const Row = ({row, columns}) =>
  h(TableRow, [
    compose(
      map(rowKey => h(TableCell, {key: rowKey}, `${row[rowKey]}`)),
      pluck('rowKey'),
    )(columns),
  ])

const ConfigurableTable = enhance(({rows, columns, className, classes}) =>
  h(Table, {className: cn(classes.root, className)}, [
    h(TableHead, [
      h(TableRow, [
        compose(
          map(label => h(TableCell, {key: label}, label)),
          pluck('label'),
        )(columns),
      ]),
    ]),
    h(TableBody, [
      h(KeyedModels, {
        ModelComponent: Row,
        models: rows,
        getProps: ({model}) => ({row: model, columns}),
      }),
    ]),
  ]),
)

ConfigurableTable.propTypes = {
  className: Props.string,
}

export {ConfigurableTable}
