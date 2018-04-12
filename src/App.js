import {div, h} from './hyper-script'
import {AppBar, CssBaseline, Toolbar, Typography, withStyles} from 'material-ui'

const App = () => h(CssBaseline, [
  h(Layout, [
    h(AppBar, [
        h(Toolbar, [
          h(Typography, {variant: 'title', color: 'inherit'}, 'Robust React App'),
        ]),
      ],
    ),
  ]),
])

const Layout = withStyles({
  root: {
    height: '100vh', width: '100vw', overflow: 'scroll',
  },
})(
  ({children, classes}) =>
    div({className: classes.root}, [children]),
)

export default App
