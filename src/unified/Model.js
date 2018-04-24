// import 'dom-testing-library/extend-expect'
import {ListItemText, MenuItem, Paper} from 'material-ui'
// import {render} from 'react-testing-library'
// import {describe, expect, it, specs, storiesOf} from '../../../../facade'
import {storiesOf} from '../facade'
import {div, h} from '../hyper-script'

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
  .addDecorator(story =>
    div(
      {
        style: {
          padding: '16px 0',
          backgroundColor: '#ddd',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        },
      },
      [div({style: {flex: 1, maxWidth: 300}}, [h(Paper, [story()])])],
    ),
  )
  .add('ListItem', () => {
    return h(ModelListItem, {model: {id: 0, name: 'Foo bar'}})
  })
