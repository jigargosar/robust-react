import {connect} from '@cerebral/react'
import {signal, state} from 'cerebral/tags'
import {AppBar, TextField, Toolbar, Typography, withStyles} from 'material-ui'
import {h} from '../hyper-script'

const Header = withStyles(({spacing: {unit}}) => ({
  flex: {
    flex: 1,
  },
  textFieldRoot: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    color: 'inherit',
  },
  textFieldInput: {
    margin: `0 ${unit}px`,
  },
}))(function Header({searchText, onSearchInputChange, classes}) {
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
      h(TextField, {
        value: searchText,
        onChange: onSearchInputChange,
        type: 'search',
        placeholder: 'Search',
        InputProps: {
          disableUnderline: true,
          classes: {
            root: classes.textFieldRoot,
            input: classes.textFieldInput,
          },
        },
      }),
    ]),
  ])
})

export default connect(
  {
    setSearchText: signal`setSearchText`,
    searchText: state`searchText`,
  },
  ({setSearchText, searchText}) => ({
    onSearchInputChange: event =>
      setSearchText({searchText: event.target.value}),
    searchText,
  }),
  Header,
)
