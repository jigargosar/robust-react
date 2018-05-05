import {compose} from 'ramda'
import Props from 'prop-types'
import {setDisplayName} from 'recompose'
import {Button, Typography, withStyles} from 'material-ui'
import cn from 'classnames'
import {h} from '@jigargosar/utils'
import {Fields} from './Fields'

const enhance = compose(
  withStyles(() => ({
    root: {},
  })),
  setDisplayName('Collection'),
)

const Collection = enhance(({className, classes, collection, onGoBack}) =>
  h('div', {className: cn(classes.root, className)}, [
    h(Typography, {variant: 'title'}, [collection.name]),
    h(Button, {onClick: onGoBack}, 'Back'),
    h(Fields, {collection}),
  ]),
)

Collection.propTypes = {
  className: Props.string,
}

export {Collection}
