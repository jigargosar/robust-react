import Chance from 'chance'
import {List, ListItemText, MenuItem} from 'material-ui'
import {head, map, propOr, times} from 'ramda'
import {storiesOf} from '../../facade'
import {h} from '../../hyper-script'
import {centerPaper} from './story-decorators/centerPaper'
// import 'dom-testing-library/extend-expect'
// import {render} from 'react-testing-library'
// import {describe, expect, it, specs, storiesOf} from '../../../../facade'

const story = storiesOf('Unified | Model', module).addDecorator(centerPaper)

const createFakes = () => {
  const chance = Chance(11)
  return times(idx => ({id: idx, name: chance.country({full: true})}), 3)
}

const ModelListItem = ({
  model,
  primary = propOr('<primary or name not found>', 'name'),
  onClick = () => () => {},
}) => h(MenuItem, {onClick: onClick(model)}, [h(ListItemText, primary(model))])

story.add('ListItem', () => h(ModelListItem, {model: head(createFakes())}))

const ModelList = ({models, ...other}) =>
  h(List, map(model => h(ModelListItem, {model, ...other}), models))

story.add('List', () => h(ModelList, {models: createFakes()}))

export {ModelList}
