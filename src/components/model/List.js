import {signal, state} from 'cerebral/tags'
import {List, MenuItem} from 'material-ui'
import {h} from '../../hyper-script'
import S from '../../sanctuary'
import connect2 from '../connect2'

const ModelListItem = connect2(
  {showModel: signal`showModel`},
  ({model, showModel}) =>
    h(MenuItem, {onClick: () => showModel({model})}, model.text),
)

const ModelList = connect2({models: state`collections`}, ({models}) =>
  h(List, S.map(model => h(ModelListItem, {key: model.id, model}), models)),
)

export default ModelList
