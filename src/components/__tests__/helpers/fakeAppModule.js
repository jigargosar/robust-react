import {Chance} from 'chance'
import S from '../../../sanctuary'

const chance = Chance(123)

const initialDTables = S.pipe(
  [
    S.range(0),
    S.reverse,
    S.map(i => ({id: i, text: chance.country({full: true})})),
  ],
  20,
)

const fakeAppModule = {
  state: {
    dTables: initialDTables,
  },
}
export default fakeAppModule
