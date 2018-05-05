import {compose} from 'ramda'
import Props from 'prop-types'
import {setDisplayName} from 'recompose'
import {withStyles} from 'material-ui'
import cn from 'classnames'
import {h} from '@jigargosar/utils'
import {CollapsibleFields} from './CollapsibleFields'

const enhance = compose(
  withStyles(() => ({
    root: {},
    backButton: {
      marginRight: 20,
    },
    toolbar: {
      paddingLeft: 0,
    },
  })),
  setDisplayName('Collection'),
)

const Collection = enhance(({className, classes, collection}) =>
  h('div', {className: cn(classes.root, className)}, [
    h(CollapsibleFields, {collection}),
  ]),
)

Collection.propTypes = {
  className: Props.string,
}

export {Collection}
