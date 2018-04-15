import {state} from 'cerebral/tags'
import {List, MenuItem} from 'material-ui'
import {h} from '../../hyper-script'
import S from '../../sanctuary'
import connect2 from '../connect2'

const ModelListItem = ({model}) => h(MenuItem, model.text)

const ModelList = connect2({models: state`collections`}, ({models}) =>
  h(List, S.map(model => h(ModelListItem, {key: model.id, model}), models)),
)

export default ModelList
