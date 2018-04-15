import {state} from 'cerebral/tags'
import {
  AppBar,
  CssBaseline,
  Paper,
  Toolbar,
  Typography,
  withStyles,
} from 'material-ui'
import {div, h} from '../hyper-script'
import S from '../sanctuary'
import connect2 from './connect2'
import Header from './Header'
import ModelList from './model/List'

const ModelListContainer = withStyles(theme => ({
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

const App = connect2({currentModel: state`currentModelId`}, ({currentModel}) =>
  h(CssBaseline, [
    S.maybe([], m => [div({key: 'popup'}, `${m}`)], S.toMaybe(currentModel)),
    h(Layout, [h(Header), h(ModelListContainer), h(Footer)]),
  ]),
)

export default App
