import {compose} from 'ramda'
import Props from 'prop-types'
import {setDisplayName} from 'recompose'
import {IconButton, Toolbar, Typography, withStyles} from 'material-ui'
import cn from 'classnames'
import {h} from '@jigargosar/utils'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
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

const Collection = enhance(({className, classes, collection, onGoBack}) =>
  h('div', {className: cn(classes.root, className)}, [
    h(Toolbar, {className: classes.toolbar}, [
      h(IconButton, {className: classes.backButton, onClick: onGoBack}, [
        h(ArrowBackIcon),
      ]),
      h(Typography, {variant: 'title'}, [collection.name]),
    ]),
    h(CollapsibleFields, {collection}),
  ]),
)

Collection.propTypes = {
  className: Props.string,
}

export {Collection}
