import {
  AppBar,
  CssBaseline,
  Paper,
  Toolbar,
  Typography,
  withStyles,
} from 'material-ui'
import {div, h} from '../hyper-script'
import Header from './Header'
import ModelList from './model/List'

const ModelListLayout = withStyles(theme => ({
  root: {
    overflow: 'scroll',
    flex: 1,
  },
  paper: {
    margin: theme.spacing.unit * 2,
  },
}))(({classes}) =>
  div({className: classes.root}, [
    h(Paper, {className: classes.paper}, [h(ModelList)]),
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
  h(CssBaseline, [h(Layout, [h(Header), h(ModelListLayout), h(Footer)])])

export default App
