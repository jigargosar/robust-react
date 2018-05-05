import {compose, map} from 'ramda'
import Props from 'prop-types'
import {setDisplayName} from 'recompose'
import {withStyles} from 'material-ui'
import cn from 'classnames'
import {h} from '@jigargosar/utils'
import {ConfigurableTable} from './ui/ConfigurableTable'

const enhance = compose(
  withStyles(() => ({
    root: {},
  })),
  setDisplayName('Fields'),
)

const Fields = enhance(({collection, className, classes}) =>
  h(ConfigurableTable, {
    className: cn(classes.root, className),
    tableCellProps: {padding: 'dense'},
    rows: collection.fields,
    columns: map(([label, rowKey]) => ({label, rowKey}))([
      ['Id', 'id'],
      ['Name', 'name'],
      ['Type', 'typeId'],
      ['Default', 'initialValue'],
    ]),
  }),
)

Fields.propTypes = {
  className: Props.string,
}

export {Fields}
