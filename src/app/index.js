import {Module} from 'cerebral'
import S from '../sanctuary'
import * as sequences from './sequences'

const initialModels = S.pipe(
  [S.range(0), S.reverse, S.map(i => ({id: i, text: i + 1}))],
  20,
)

export default Module({
  state: {
    count: 100,
    setSearchText: '',
    models: initialModels,
  },
  signals: {
    incremented: sequences.increment,
    decremented: sequences.decrement,
    setSearchText: sequences.setSearchText,
  },
})
