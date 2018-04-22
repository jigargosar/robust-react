import Chance from 'chance'
// import 'dom-testing-library/extend-expect'
import {Paper} from 'material-ui'
import * as R from 'ramda'
import {render} from 'react-testing-library'
import {
  describe,
  expect,
  it,
  specs,
  storiesOf,
} from '../../../../../.storybook/facade'
import {div, h} from '../../../../hyper-script'
import type {Model, ModelListItemProps, ModelListProps} from '../ModelList'
import {ModelList, ModelListItem} from '../ModelList'

const createFakeModels = (): Array<Model> => {
  const chance = Chance(11)
  return R.times(
    (idx: number): Model => ({id: idx, name: chance.country({full: true})}),
    3,
  )
}

const models: Array<Model> = createFakeModels()

storiesOf('Model', module)
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
    const props: ModelListItemProps = {model: {id: '0', name: 'Foo bar'}}
    const story = h(ModelListItem, props)
    specs(() =>
      describe('ListItem', () =>
        it('should render without crashing', () => {
          const {container} = render(story)
          expect(container.firstChild).toMatchSnapshot()
        })),
    )
    return story
  })
  .add('List', () => {
    const props: ModelListProps = {models}
    const story = h(ModelList, props)
    specs(() =>
      describe('List', () => {
        it('should render without crashing', () => {
          const {container} = render(story)
          expect(container.firstChild).toMatchSnapshot()
        })
      }),
    )
    return story
  })

// describe()
