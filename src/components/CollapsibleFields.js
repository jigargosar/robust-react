import {compose} from 'ramda'
import Props from 'prop-types'
import {setDisplayName, withHandlers, withStateHandlers} from 'recompose'
import {Collapse, IconButton, Paper, Typography, withStyles} from 'material-ui'
import {h} from '@jigargosar/utils'
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown'
import KeyboardArrowUp from '@material-ui/icons/KeyboardArrowUp'
import {Fragment} from 'react'
import {Fields} from './Fields'
import {FlexRow} from './ui/FlexRow'

const wrapDisplayName = require('recompose').wrapDisplayName

const withToggleInner = compose(
  withStateHandlers(
    {toggleOn: false},
    {toggle: ({toggleOn}) => () => ({toggleOn: !toggleOn})},
  ),
  withHandlers({ifToggleOn: ({toggleOn}) => (t, f) => (toggleOn ? t : f)}),
)

const withToggle = Base =>
  setDisplayName(wrapDisplayName(Base, 'withToggle'))(withToggleInner(Base))

const enhance = compose(
  withStyles(() => ({
    fieldsHeader: {
      flex: 1,
      marginLeft: 12,
    },
  })),
  withToggle,
  setDisplayName('CollapsibleFields'),
)

const CollapsibleFields = enhance(
  ({collection, toggle, toggleOn, ifToggleOn, classes}) =>
    h(Fragment, [
      h(FlexRow, [
        h(Typography, {className: classes.fieldsHeader, variant: 'title'}, [
          'Columns',
        ]),
        h(IconButton, {onClick: toggle}, [
          h(ifToggleOn(KeyboardArrowUp, KeyboardArrowDown)),
        ]),
      ]),
      h(Paper, [h(Collapse, {in: toggleOn}, [h(Fields, {collection})])]),
    ]),
)

CollapsibleFields.propTypes = {
  className: Props.string,
}

export {CollapsibleFields}
