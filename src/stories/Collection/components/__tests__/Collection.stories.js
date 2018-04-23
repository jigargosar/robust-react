// @flow

import Chance from 'chance'
// import 'dom-testing-library/extend-expect'
import {Paper} from 'material-ui'
import * as R from 'ramda'
import {storiesOf} from '../../../../facade'
// import {render} from 'react-testing-library'
// import {describe, expect, it, specs, storiesOf} from '../../../../facade'
import {div, h} from '../../../../hyper-script'
// import type {Collection, CollectionOrModel} from '../../types'
// import type {
//   ModelDetailProps,
//   ModelListItemProps,
//   ModelListProps,
// } from '../ModelList'
import {ModelDetail, ModelList, ModelListItem} from '../ModelList'

const createFakeCollections = () => {
  const chance = Chance(11)
  return R.times(
    (idx: number) => ({
      id: idx,
      name: chance.country({full: true}),
      items: [],
    }),
    3,
  )
}

const models = createFakeCollections()
const model = {id: 0, name: 'Foo bar', items: []}

storiesOf('Collection', module)
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
    return h(ModelListItem, {model})
  })
  .add('List', () => {
    return h(ModelList, {models})
  })
  .add('Detail', () => {
    return h(ModelDetail, {model})
  })

// specs(() =>
//   describe('ListItem', () =>
//     it('should render without crashing', () => {
//       const {container} = render(story)
//       expect(container.firstChild).toMatchSnapshot()
//     })),
// )
