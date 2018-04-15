import {Module} from 'cerebral'
import S from '../sanctuary'
import * as sequences from './sequences'

const initialModels = S.pipe(
  [S.range(0), S.reverse, S.map(i => ({id: i, text: i + 1}))],
  20,
)

const initialCollections = S.pipe(
  [S.range(0), S.reverse, S.map(i => ({id: i, text: i + 1}))],
  20,
)
export default Module({
  state: {
    searchText: '',
    models: initialModels,
    collections: initialCollections,
  },
  signals: {
    updateSearchText: sequences.updateSearchText,
  },
})
