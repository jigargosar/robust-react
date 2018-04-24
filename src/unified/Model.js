import {ListItemText, MenuItem} from 'material-ui'
import {storiesOf} from '../facade'
import {h} from '../hyper-script'
import {centerPaper} from './story-decorators/centerPaper'
// import 'dom-testing-library/extend-expect'
// import {render} from 'react-testing-library'
// import {describe, expect, it, specs, storiesOf} from '../../../../facade'

const ModelListItem = ({model}) => {
  return h(MenuItem, [h(ListItemText, model.name)])
}

// const createFakeModels = () => {
//   const chance = Chance(11)
//   return R.times(
//     (idx: number) => ({id: idx, name: chance.country({full: true})}),
//     3,
//   )
// }

storiesOf('Unified | Model', module)
  .addDecorator(centerPaper)
  .add('ListItem', () => {
    return h(ModelListItem, {model: {id: 0, name: 'Foo bar'}})
  })
