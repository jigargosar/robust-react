// noinspection ES6CheckImport
import {Chance} from 'chance'
import {createRootStore, Model, Store} from 'libx'
import {computed, decorate, observable} from 'mobx'
import nanoIdOriginal from 'nanoid'
import S from '../sanctuary'

let count = 0

const nanoId = () => {
  nanoIdOriginal()
  count += 1
  return count
}

const getInitialTables = () => {
  const chance = Chance(123)
  return S.pipe(
    [
      S.range(0),
      S.reverse,
      S.map(() => ({
        id: nanoId(),
        text: chance.country({full: true}),
        createdAt: Date.now(),
        modifiedAt: Date.now(),
      })),
    ],
    20,
  )
}

class DefaultModel extends Model {}

decorate(DefaultModel, {
  id: observable,
  text: observable,
  createdAt: observable,
  modifiedAt: observable,
})

class DefaultStore extends Store {
  get set() {
    return this.items.set
  }
}

decorate(DefaultStore, {
  set: computed,
})

class Column extends DefaultModel {
  name = 'Column X'
  type = 'string'
  value = ''
}

decorate(Column, {
  name: observable,
  type: observable,
  value: observable,
})

class ColumnStore extends DefaultStore {
  items = this.collection({model: Column})
}

class Table extends DefaultModel {
  constructor(attributes, options) {
    super(attributes, options)
    this.columnStore = new ColumnStore({rootStore: options.rootStore})
  }

  get columns() {
    return this.columnStore.items
  }
}

decorate(Table, {
  columnStore: observable,
})

class TableStore extends DefaultStore {
  constructor(opts) {
    super(opts)
    this.items = this.collection({
      model: Table,
    })
    this.set(getInitialTables())
  }

  get tables() {
    return this.items
  }
}

decorate(TableStore, {})

class TableScreenStore extends Store {
  current = null
  get tables() {
    const {tables} = this.rootStore.tableStore
    return tables.slice()
  }

  onListItemClick = table => () => (this.current = table)
  onDialogClose = () => (this.current = null)
}

decorate(TableScreenStore, {
  tables: computed,
  current: observable,
})

const rootStore = createRootStore({
  tableStore: TableStore,
  tableScreenStore: TableScreenStore,
})

export default rootStore
