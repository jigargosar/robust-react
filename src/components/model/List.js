import {List, MenuItem} from 'material-ui'
import {map} from 'ramda'
import {h} from '../../hyper-script'
import injectObserve from '../injectObserve'

const ModelListItem = ({model: {id, text}, showModel}) =>
  h(MenuItem, {onClick: () => showModel({id})}, text)

const EModelListItem = injectObserve(ModelListItem)

const ModelList = ({collectionScreenStore: {collections}}) =>
  h(List, map(model => h(EModelListItem, {key: model.id, model}), collections))

export default injectObserve(ModelList)
