import {
  AppBar,
  CssBaseline,
  List,
  MenuItem,
  Paper,
  Toolbar,
  Typography,
  withStyles,
} from 'material-ui'
import {div, h} from './hyper-script'
import S from './sanctuary'
import Header from './components/Header'

const NumberList = () =>
  h(
    List,
    S.pipe(
      [S.range(0), S.reverse, S.map(id => h(MenuItem, {key: id}, id + 1))],
      20,
    ),
  )

const NumberListLayout = withStyles(theme => ({
  root: {
    overflow: 'scroll',
    flex: 1,
  },
  container: {
    display: 'flex',
    flexDirection: 'column-reverse',
  },
  paper: {margin: theme.spacing.unit * 2},
}))(({classes}) =>
  div({className: classes.root}, [
    div({className: classes.container}, [
      h(Paper, {className: classes.paper}, [h(NumberList)]),
    ]),
  ]),
)

const Footer = withStyles({})(() =>
  h(AppBar, {position: 'static', component: 'footer'}, [
    h(Toolbar, [h(Typography, {variant: 'title', color: 'inherit'}, 'Footer')]),
  ]),
)
const Layout = withStyles({
  root: {
    height: '100vh',
    width: '100vw',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
  },
})(({children, classes}) => div({className: classes.root}, [children]))

const App = () =>
  h(CssBaseline, [h(Layout, [h(Header), h(NumberListLayout), h(Footer)])])

export default App
