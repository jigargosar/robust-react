import {div, h} from './hyper-script'
import {AppBar, CssBaseline, List, MenuItem, Paper, Toolbar, Typography, withStyles} from 'material-ui'
import {S} from './sanctuary'

const NumberList = () =>
  h(List,
    S.pipe(
      [S.range(0),
        S.reverse,
        S.map(id => h(MenuItem, {key: id}, id)),
      ],
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

const Header = withStyles({
  foo: {}
})(() =>
  h(AppBar, {position: 'static'}, [
    h(Toolbar, [
      h(Typography, {variant: 'title', color: 'inherit'}, 'Robust React App'),
    ]),
  ])
)
const Footer = withStyles({foo:{

  }})(() =>
  h(AppBar, {position: 'static', component:"footer"}, [
    h(Toolbar, [
      h(Typography, {variant: 'title', color: 'inherit'}, 'Robust React App'),
    ]),
  ])
)
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
      h(Footer),
    ]),
  ])

export default App
