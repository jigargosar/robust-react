import {createRootStore, Model, Store} from 'libx'
import {computed, decorate, observable} from 'mobx'

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
