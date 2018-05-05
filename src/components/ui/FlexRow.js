import {compose} from 'ramda'
import Props from 'prop-types'
import {setDisplayName} from 'recompose'
import {withStyles} from 'material-ui'
import cn from 'classnames'
import {h} from '../../hyper-script-utils'

const enhance = compose(
  withStyles(() => ({
    root: {},
  })),
  setDisplayName('FlexRow'),
)

const FlexRow = enhance(({className, classes}) =>
  h('div', {className: cn(classes.root, className)}, 'FlexRow'),
)

FlexRow.propTypes = {
  className: Props.string,
}

export {FlexRow}
