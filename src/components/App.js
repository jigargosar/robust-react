import {state} from 'cerebral/tags'
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
import {div, h} from '../hyper-script'
import S from '../sanctuary'
import connect2 from './connect2'
import Header from './Header'

const ModelListItem = ({model}) => h(MenuItem, model.text)

const ModelList = connect2({models: state`collections`}, ({models}) =>
  h(List, S.map(model => h(ModelListItem, {key: model.id, model}), models)),
)
const ModelListLayout = withStyles(theme => ({
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
      h(Paper, {className: classes.paper}, [h(ModelList)]),
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
  h(CssBaseline, [h(Layout, [h(Header), h(ModelListLayout), h(Footer)])])

export default App
