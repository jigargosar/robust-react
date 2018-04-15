import {Module} from 'cerebral'
import {Chance} from 'chance'
import S from '../sanctuary'
import * as sequences from './sequences'

const chance = Chance(123)

const initialCollections = S.pipe(
  [
    S.range(0),
    S.reverse,
    S.map(i => ({id: i, text: chance.country({full: true})})),
  ],
  20,
)
export default Module({
  state: {
    searchText: '',
    collections: initialCollections,
  },
  signals: {
    updateSearchText: sequences.updateSearchText,
  },
})
