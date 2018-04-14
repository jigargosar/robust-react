import {connect} from '@cerebral/react'
import {signal, state} from 'cerebral/tags'
import {AppBar, TextField, Toolbar, Typography, withStyles} from 'material-ui'
import {h} from '../hyper-script'

const Search = withStyles(({spacing: {unit}}) => ({
  root: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    color: 'inherit',
  },
  input: {
    margin: `0 ${unit}px`,
  },
}))(function Search({searchText, onSearchInputChange, classes}) {
  return h(TextField, {
    value: searchText,
    onChange: onSearchInputChange,
    type: 'search',
    placeholder: 'Search',
    InputProps: {
      disableUnderline: true,
      classes: {
        root: classes.root,
        input: classes.input,
      },
    },
  })
})

const ConnectedSearch = connect(
  {
    setSearchText: signal`setSearchText`,
    searchText: state`searchText`,
  },
  ({setSearchText, searchText}) => ({
    onSearchInputChange: event =>
      setSearchText({searchText: event.target.value}),
    searchText,
  }),
  Search,
)

const Header = withStyles({
  flex: {
    flex: 1,
  },
})(function Header({classes}) {
  return h(AppBar, {position: 'static'}, [
    h(Toolbar, [
      h(
        Typography,
        {
          className: classes.flex,
          variant: 'title',
          color: 'inherit',
        },
        'Robust React App',
      ),
      h(ConnectedSearch),
    ]),
  ])
})

export default connect({}, Header)
