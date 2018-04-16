import {
  AppBar,
  CssBaseline,
  Dialog,
  DialogContent,
  DialogTitle,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Toolbar,
  Typography,
  withStyles,
} from 'material-ui'
import * as MR from 'mobx-react'
import * as R from 'ramda'
import {div, h} from '../hyper-script'
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

const injectObserve = R.compose(
  MR.inject((stores, props) => ({
    ...stores,
    ...props,
  })),
  MR.observer,
)

const DTableInfo = ({dTable}) =>
  h(Table, [
    h(TableBody, [
      h(TableRow, [h(TableCell, 'ID'), h(TableCell, dTable.id)]),
      h(TableRow, [h(TableCell, 'Text'), h(TableCell, dTable.text)]),
      h(TableRow, [h(TableCell, 'Created At'), h(TableCell, dTable.createdAt)]),
      h(TableRow, [
        h(TableCell, 'Modified At'),
        h(TableCell, dTable.modifiedAt),
      ]),
    ]),
  ])

const DTableDialog = ({dTableScreenStore: {onDialogClose, current}}) =>
  (current
    ? () =>
        h(Dialog, {open: true, onClose: onDialogClose}, [
          h(DialogTitle, `DTable: ${current.text}`),
          h(DialogContent, [h(DTableInfo, {dTable: current})]),
        ])
    : R.always(false))()

const XDTableDialog = injectObserve(DTableDialog)

const App = () =>
  h(CssBaseline, [
    h(Layout, [h(Header), h(ModelListContainer), h(Footer)]),
    h(XDTableDialog),
  ])

export default injectObserve(App)
