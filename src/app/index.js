import {Module} from 'cerebral'
import {set} from 'cerebral/operators'
import {props, state} from 'cerebral/tags'
// noinspection ES6CheckImport
import {Chance} from 'chance'
import S from '../sanctuary'
import * as sequences from './sequences'

const chance = Chance(123)

const initialTables = S.pipe(
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
    tables: initialTables,
    currentModelId: null,
  },
  signals: {
    updateSearchText: sequences.updateSearchText,
    showModel: set(state`currentModelId`, props`id`),
  },
})
