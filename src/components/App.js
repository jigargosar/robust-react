import {
  AppBar,
  Button,
  CssBaseline,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TextField,
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

const TableInfo = ({table}) =>
  h(Table, [
    h(TableBody, [
      h(TableRow, [h(TableCell, 'ID'), h(TableCell, table.id)]),
      h(TableRow, [h(TableCell, 'Name'), h(TableCell, table.text)]),
      h(TableRow, [h(TableCell, 'Created At'), h(TableCell, table.createdAt)]),
      h(TableRow, [
        h(TableCell, 'Modified At'),
        h(TableCell, table.modifiedAt),
      ]),
    ]),
  ])

const TableDialog = ({
  tableScreenStore: {onAddColumn, onDialogClose, current},
}) =>
  (current
    ? () =>
        h(Dialog, {open: true, onClose: onDialogClose}, [
          h(DialogTitle, `Table: ${current.text}`),
          h(DialogContent, [h(TableInfo, {table: current})]),
          h(DialogActions, [h(Button, {onClick: onAddColumn}, 'add column')]),
        ])
    : R.always(false))()

const ColumnDialog = ({
  tableScreenStore: {
    onSaveColumn,
    onColumnDialogClose,
    columnData,
    onColumnTextChange,
    onColumnTypeChange,
  },
}) =>
  (columnData
    ? () =>
        h(Dialog, {open: true, onClose: onColumnDialogClose}, [
          h(DialogTitle, `Add Column`),
          h(DialogContent, [
            div([
              h(TextField, {
                value: columnData.text,
                placeholder: 'Name',
                label: 'Name',
                onChange: onColumnTextChange,
                required: true,
              }),
              h(TextField, {
                value: columnData.type,
                placeholder: 'Type',
                label: 'Type',
                onChange: onColumnTypeChange,
                required: true,
              }),
            ]),
          ]),
          h(DialogActions, [h(Button, {onClick: onSaveColumn}, 'ok')]),
        ])
    : R.always(false))()

const XTableDialog = injectObserve(TableDialog)
const XColumnDialog = injectObserve(ColumnDialog)

const App = () =>
  h(CssBaseline, [
    h(Layout, [h(Header), h(ModelListContainer), h(Footer)]),
    h(XTableDialog),
    h(XColumnDialog),
  ])

export default injectObserve(App)
