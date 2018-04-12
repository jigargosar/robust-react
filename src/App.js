import {div, h} from './hyper-script'
import {AppBar, CssBaseline, List, MenuItem, Toolbar, Typography, withStyles} from 'material-ui'
import {times} from 'ramda'

const NumberList = withStyles({root: {overflow: 'scroll'}})(
  (classes) =>
    div({className: classes.root}, [
      h(List, times(id => h(MenuItem, {key: id}, id), 10),
      )],
    ),
)

const Layout = withStyles({
  root: {height: '100vh', width: '100vw', overflow: 'hidden'},
})(
  ({children, classes}) =>
    div({className: classes.root}, [children]),
)

const App = () => h(CssBaseline, [
  h(Layout, [
    h(AppBar, {position: 'static'}, [
        h(Toolbar, [
          h(Typography, {variant: 'title', color: 'inherit'}, 'Robust React App'),
        ]),
      ],
    ),
    h(NumberList),
  ]),
])

export default App
