import {signal, state} from 'cerebral/tags'
import {TextField, withStyles} from 'material-ui'
import {h} from '../hyper-script'
import S from '../sanctuary'
import connect3 from './connect3'

const styles = ({spacing: {unit}}) => ({
  root: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    color: 'inherit',
  },
  input: {
    margin: `0 ${unit}px`,
  },
})

const Search = ({value, onChange, classes}) => {
  return h(TextField, {
    value,
    onChange,
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
}

export default S.pipe(
  [
    withStyles(styles),
    connect3(
      {
        setSearchText: signal`setSearchText`,
        searchText: state`searchText`,
      },
      ({setSearchText, searchText}, props) => ({
        onChange: event => setSearchText({searchText: event.target.value}),
        value: searchText,
        ...props,
      }),
    ),
  ],
  Search,
)
