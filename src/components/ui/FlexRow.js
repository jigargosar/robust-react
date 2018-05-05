import {compose} from 'ramda'
import Props from 'prop-types'
import {setDisplayName} from 'recompose'
import {withStyles} from 'material-ui'
import cn from 'classnames'
import {h} from '@jigargosar/utils'

const enhance = compose(
  withStyles(() => ({
    root: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      margin: '0 -4px',
      '&>*': {
        margin: '0 4px',
      },
    },
  })),
  setDisplayName('FlexRow'),
)

const FlexRow = enhance(({className, children, classes}) =>
  h('div', {className: cn(classes.root, className)}, children),
)

FlexRow.propTypes = {
  className: Props.string,
  children: Props.node.isRequired,
}

export {FlexRow}
