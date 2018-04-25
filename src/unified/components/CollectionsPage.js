import Chance from 'chance'
import {times} from 'ramda'
import {render, Simulate} from 'react-testing-library'
import {action, describe, expect, it, jest, storiesOf} from '../../facade'
import {h} from '../../hyper-script'
import {ModelList} from './Model'
import {centerPaper} from './story-decorators/centerPaper'

// import 'dom-testing-library/extend-expect'

const createCollection = chance => id => ({
  id,
  name: chance.country({full: true}),
  itemCount: chance.integer({min: 3, max: 10}),
})

const createFakes = () => {
  const chance = new Chance(11)
  return times(createCollection(chance), 3)
}

const story = storiesOf('Unified | Pages', module).addDecorator(centerPaper)

const Collection = ({models = createFakes(), onClick}) =>
  h(ModelList, {
    models,
    primary: c => `${c.name} (${c.itemCount})`,
    onClick,
  })

story.add('Collections', () =>
  h(Collection, {
    onClick: collection => e =>
      action('collectionClicked')(collection.name, e.type),
  }),
)

describe('Collections', () => {
  it('should call onClick with model and event', () => {
    expect.assertions(4)
    const onClick = jest.fn(collection => event => {
      expect(collection.name).toEqual('Kenya')
      expect(event.type).toEqual('click')
    })
    const {getByText} = render(h(Collection, {onClick}))

    const collectionNode = getByText('Kenya (4)')
    expect(collectionNode).toBeDefined()
    Simulate.click(collectionNode)
    expect(onClick).toHaveBeenCalled()
  })
})
