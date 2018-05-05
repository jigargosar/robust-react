import {compose} from 'ramda'
import Props from 'prop-types'
import {setDisplayName} from 'recompose'
import {IconButton, Paper, Toolbar, Typography, withStyles} from 'material-ui'
import cn from 'classnames'
import {h} from '@jigargosar/utils'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import {Fields} from './Fields'

const enhance = compose(
  withStyles(() => ({
    root: {},
    backButton: {
      marginLeft: -12,
      marginRight: 20,
    },
    title: {
      // flex: 1,
      // textAlign: 'center',
    },
    fieldsHeader: {
      margin: 12,
    },
  })),
  setDisplayName('Collection'),
)

const Collection = enhance(({className, classes, collection, onGoBack}) =>
  h('div', {className: cn(classes.root, className)}, [
    h(Toolbar, [
      h(IconButton, {className: classes.backButton, onClick: onGoBack}, [
        h(ArrowBackIcon),
      ]),
      h(Typography, {className: classes.title, variant: 'title'}, [
        collection.name,
      ]),
    ]),
    h(Typography, {className: classes.fieldsHeader, variant: 'title'}, [
      'Fields',
    ]),
    h(Paper, [h(Fields, {collection})]),
  ]),
)

Collection.propTypes = {
  className: Props.string,
}

export {Collection}
