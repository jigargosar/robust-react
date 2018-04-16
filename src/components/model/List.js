import {List, MenuItem} from 'material-ui'
import {map} from 'ramda'
import {h} from '../../hyper-script'
import injectObserve from '../injectObserve'

const ModelListItem = ({model, dTableScreenStore: {onListItemClick}}) =>
  h(MenuItem, {onClick: onListItemClick(model)}, model.text)

const EModelListItem = injectObserve(ModelListItem)

const ModelList = ({dTableScreenStore: {dTables}}) =>
  h(List, map(model => h(EModelListItem, {key: model.id, model}), dTables))

export default injectObserve(ModelList)
