import {div, h} from './hyper-script'
import {AppBar, CssBaseline, List, MenuItem, Paper, Toolbar, Typography, withStyles} from 'material-ui'
import {compose, map, range, reverse} from 'ramda'

const NumberList = () =>
  h(List,
    compose(
      map(id => h(MenuItem, {key: id}, id)),
      reverse,
      range(0),
    )(10),
  )
const NumberListLayout = withStyles(theme => ({
  root: {
    overflow: 'scroll',
    flex: 1,
    display: 'flex',
    flexDirection: 'column-reverse',
  },
  paper: {margin: theme.spacing.unit * 2},
}))(
  ({classes}) =>
    div({className: classes.root}, [
      h(Paper, {className: classes.paper}, [
        h(NumberList),
      ]),
    ]))

const Header = () =>
  h(AppBar, {position: 'static'}, [
    h(Toolbar, [
      h(Typography, {variant: 'title', color: 'inherit'}, 'Robust React App'),
    ]),
  ])

const Layout = withStyles({
  root: {
    height: '100vh',
    width: '100vw',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
  },
})(
  ({children, classes}) =>
    div({className: classes.root}, [children]),
)

const App = () =>
  h(CssBaseline, [
    h(Layout, [
      h(Header),
      h(NumberListLayout),
    ]),
  ])

export default App
