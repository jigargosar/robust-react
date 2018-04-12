import {div, h} from './hyper-script'
import {AppBar, CssBaseline, List, MenuItem, Toolbar, Typography, withStyles} from 'material-ui'
import {times} from 'ramda'

const NumberList = withStyles({root: {overflow: 'scroll'}})(
  ({classes}) =>
    h(
      List,
      {className: classes.root},
      times(id => h(MenuItem, {key: id}, id), 10),
    ))

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
      h(NumberList),
    ]),
  ])

export default App
