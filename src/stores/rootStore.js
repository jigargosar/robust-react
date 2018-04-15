// noinspection ES6CheckImport
import {Chance} from 'chance'
import {createRootStore, Model, Store} from 'libx'
import {computed, decorate, observable} from 'mobx'
import S from '../sanctuary'

class Collection extends Model {
  id
  text = ''
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
  collections = this.collection({
    model: Collection,
  })

  get set() {
    return this.collections.set
  }
}

class CollectionScreenStore extends Store {
  get collections() {
    const {collections} = this.rootStore.collectionStore
    return collections.slice()
  }
}

decorate(CollectionScreenStore, {
  collections: computed,
})

const rootStore = createRootStore({
  collectionStore: CollectionStore,
  collectionScreenStore: CollectionScreenStore,
})

export default rootStore

const getInitialCollections = () => {
  const chance = Chance(123)
  return S.pipe(
    [
      S.range(0),
      S.reverse,
      S.map(i => ({id: i, text: chance.country({full: true})})),
    ],
    20,
  )
}

rootStore.collectionStore.set(getInitialCollections())
