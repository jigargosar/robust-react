import {AppBar, Toolbar, Typography, withStyles} from 'material-ui'
import {h} from '../hyper-script'
import S from '../sanctuary'
import connect2 from './connect2'
import Search from './Search'

const styles = {
  flex: {
    flex: 1,
  },
}

const Header = ({classes}) => {
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
}

export default S.pipe([withStyles(styles), connect2({})], Header)
