import {signal, state} from 'cerebral/tags'
import {TextField, withStyles} from 'material-ui'
import {h} from '../hyper-script'
import S from '../sanctuary'
import connect2 from './connect2'

const styles = ({spacing: {unit}}) => ({
  root: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    color: 'inherit',
  },
  input: {
    margin: `0 ${unit}px`,
  },
})

const onValueChange = update => e => update(e.target.value)

const Search = ({value, updateValue, classes}) => {
  return h(TextField, {
    value,
    onChange: onValueChange(updateValue),
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
    connect2({
      updateValue: signal`updateSearchText`,
      value: state`searchText`,
    }),
  ],
  Search,
)
