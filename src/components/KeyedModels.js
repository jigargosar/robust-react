import Props from 'prop-types'
import {identity, map, prop} from 'ramda'
import {h} from 'utils/src/hyper-script-utils'

const KeyedModels = ({ModelComponent, getKey, getProps, models, ...other}) =>
  map(model =>
    h(ModelComponent, {key: getKey(model), ...getProps({model, ...other})}),
  )(models)

KeyedModels.propTypes = {
  ModelComponent: Props.func.isRequired,
  models: Props.array.isRequired,
  getKey: Props.func,
  getProps: Props.func,
}

KeyedModels.defaultProps = {
  getKey: prop('id'),
  getProps: identity,
}

export {KeyedModels}
