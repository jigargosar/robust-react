import {connect} from '@cerebral/react'
import {AppBar, Toolbar, Typography, withStyles} from 'material-ui'
import {h} from '../hyper-script'
import Search from './Search'

const Header = withStyles({
  flex: {
    flex: 1,
  },
})(function Header({classes}) {
  return h(AppBar, {position: 'static'}, [
    h(Toolbar, [
      h(
        Typography,
        {
          className: classes.flex,
          variant: 'title',
          color: 'inherit',
        },
        'Robust React App',
      ),
      h(Search),
    ]),
  ])
})

export default connect({}, Header)
