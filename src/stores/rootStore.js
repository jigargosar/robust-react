// noinspection ES6CheckImport
import {Chance} from 'chance'
import {createRootStore, Model, Store} from 'libx'
import {computed, decorate, observable} from 'mobx'
import S from '../sanctuary'

const getInitialCollections = () => {
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

class Collection extends Model {
  id
  text
  createdAt = Date.now()
  modifiedAt = Date.now()
}

decorate(Collection, {
  id: observable,
  text: observable,
  createdAt: observable,
  modifiedAt: observable,
})

class CollectionStore extends Store {
  constructor(opts) {
    super(opts)
    this.collections = this.collection({
      model: Collection,
    })
    this.set(getInitialCollections())
  }

  get set() {
    return this.collections.set
  }
}

decorate(CollectionStore, {set: computed})

class CollectionScreenStore extends Store {
  current = null
  get collections() {
    const {collections} = this.rootStore.collectionStore
    return collections.slice()
  }

  onListItemClick = collection => () => (this.current = collection)
}

decorate(CollectionScreenStore, {
  collections: computed,
  current: observable,
})

// class RootStore {
//   constructor() {
//     this.collectionStore = new CollectionStore({rootStore:this},
// getInitialCollections()) this.collectionScreenStore =
// CollectionScreenStore({rootStore: this}) } }

const rootStore = createRootStore({
  collectionStore: CollectionStore,
  collectionScreenStore: CollectionScreenStore,
})

export default rootStore
