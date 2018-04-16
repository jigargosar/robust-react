// noinspection ES6CheckImport
import {Chance} from 'chance'
import {createRootStore, Model, Store} from 'libx'
import {computed, decorate, observable} from 'mobx'
import nanoIdOriginal from 'nanoid'
import {merge} from 'ramda'
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

class ItemStore extends Store {
  get set() {
    return this.items.set
  }
}

decorate(ItemStore, {
  set: computed,
})

class Column extends DefaultModel {
  type = 'string'
}

decorate(Column, {
  type: observable,
})

class ColumnStore extends ItemStore {
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

class TableStore extends ItemStore {
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
  columnData = null
  get tables() {
    const {tables} = this.rootStore.tableStore
    return tables
  }

  onListItemClick = table => () => (this.current = table)

  onDialogClose = () => (this.current = null)

  onAddColumn = () => (this.columnData = {text: 'Column X', type: 'string'})

  onColumnTextChange = e =>
    (this.columnData = merge(this.columnData, {text: e.target.value}))

  onColumnTypeChange = e =>
    (this.columnData = merge(this.columnData, {type: e.target.value}))

  onSaveColumn = () => {
    this.current.columns.set(
      merge(
        {
          id: nanoId(),
          createdAt: Date.now(),
          modifiedAt: Date.now(),
        },
        this.columnData,
      ),
    )
    this.columnData = null
  }
}

decorate(TableScreenStore, {
  tables: computed,
  current: observable,
  columnData: observable,
})

const rootStore = createRootStore({
  tableStore: TableStore,
  tableScreenStore: TableScreenStore,
})

export default rootStore
