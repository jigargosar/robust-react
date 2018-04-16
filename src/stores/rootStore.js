// noinspection ES6CheckImport
import {Chance} from 'chance'
import {createRootStore, Model, Store} from 'libx'
import {computed, decorate, observable} from 'mobx'
import S from '../sanctuary'

const getInitialDTables = () => {
  const chance = Chance(123)
  return S.pipe(
    [
      S.range(0),
      S.reverse,
      S.map(i => ({
        id: i,
        text: chance.country({full: true}),
      })),
    ],
    20,
  )
}

class DTable extends Model {
  id
  text
  createdAt = Date.now()
  modifiedAt = Date.now()
}

decorate(DTable, {
  id: observable,
  text: observable,
  createdAt: observable,
  modifiedAt: observable,
})

class DTableStore extends Store {
  constructor(opts) {
    super(opts)
    this.dTables = this.collection({
      model: DTable,
    })
    this.set(getInitialDTables())
  }

  get set() {
    return this.dTables.set
  }
}

decorate(DTableStore, {set: computed})

class DTableScreenStore extends Store {
  current = null
  get dTables() {
    const {dTables} = this.rootStore.dTableStore
    return dTables.slice()
  }

  onListItemClick = dTable => () => (this.current = dTable)
  onDialogClose = () => (this.current = null)
}

decorate(DTableScreenStore, {
  dTables: computed,
  current: observable,
})

// class RootStore {
//   constructor() {
//     this.dTableStore = new DTableStore({rootStore:this},
// getInitialDTables()) this.dTableScreenStore =
// DTableScreenStore({rootStore: this}) } }

const rootStore = createRootStore({
  dTableStore: DTableStore,
  dTableScreenStore: DTableScreenStore,
})

export default rootStore
