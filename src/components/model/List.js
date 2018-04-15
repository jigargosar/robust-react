import {Compute} from 'cerebral'
import {props, signal, state} from 'cerebral/tags'
import {List, MenuItem} from 'material-ui'
import * as R from 'ramda'
import {h} from '../../hyper-script'
import S from '../../sanctuary'
import connect2 from '../connect2'

const ModelListItem = connect2(
  {
    showModel: signal`showModel`,
    model: Compute(state`collections`, props`id`, (c, id) => {
      return R.find(R.propEq('id', id), c)
    }),
  },
  ({model, showModel}) =>
    h(MenuItem, {onClick: () => showModel({modelId: model.id})}, model.text),
)

const ModelList = connect2({models: state`collections`}, ({models}) =>
  h(
    List,
    S.map(model => h(ModelListItem, {key: model.id, id: model.id}), models),
  ),
)

export default ModelList
