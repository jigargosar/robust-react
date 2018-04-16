import {Compute} from 'cerebral'
import {props, signal, state} from 'cerebral/tags'
import {List, MenuItem} from 'material-ui'
import * as R from 'ramda'
import {h} from '../../hyper-script'
import S from '../../sanctuary'
import connect2 from '../connect2'

const dTablesLookup = Compute(state`dTables`, c =>
  R.fromPairs(R.map(m => [m.id, m], c)),
)

const ModelListItem = connect2(
  {
    showModel: signal`showModel`,
    model: Compute(props`id`, (id, get) => {
      return get(dTablesLookup)[id]
    }),
  },
  ({model: {id, text}, showModel}) =>
    h(MenuItem, {onClick: () => showModel({id})}, text),
)

const ModelList = connect2({models: state`dTables`}, ({models}) =>
  h(
    List,
    S.map(model => h(ModelListItem, {key: model.id, id: model.id}), models),
  ),
)

export default ModelList
