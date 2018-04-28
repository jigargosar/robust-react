import {action} from '@storybook/addon-actions'
import {linkTo} from '@storybook/addon-links'
import {storiesOf} from '@storybook/react'
import Chance from 'chance'
import {times} from 'ramda'
import {render, Simulate} from 'react-testing-library'
import {centerPaper} from '../centerPaper'
import {h} from '../hyper-script'
import {ModelList} from './Model'

// import 'dom-testing-library/extend-expect'

const story = storiesOf('Unified | Pages', module).addDecorator(centerPaper)

const createFakeCollections = () => {
  const chance = new Chance(11)
  const createCollection = id => ({
    id,
    name: chance.country({full: true}),
    itemCount: chance.integer({min: 3, max: 10}),
  })
  return times(createCollection, 3)
}

const CollectionsPage = ({models = createFakeCollections(), onClick}) =>
  h(ModelList, {
    models,
    primaryRenderer: c => `${c.name} (${c.itemCount})`,
    onClick,
  })

story.add('Collections', () =>
  h(CollectionsPage, {
    onClick: () => () =>
      // action('collectionClicked')(collection.name, e.type),
      linkTo('Unified | Pages', 'Collection')(),
  }),
)

describe('Collections', () => {
  it('should call onClick with model and event', () => {
    expect.assertions(4)
    const onClick = jest.fn(collection => event => {
      expect(collection.name).toEqual('Kenya')
      expect(event.type).toEqual('click')
    })
    const {getByText} = render(h(CollectionsPage, {onClick}))

    const collectionNode = getByText('Kenya (4)')
    expect(collectionNode).toBeDefined()
    Simulate.click(collectionNode)
    expect(onClick).toHaveBeenCalled()
  })
})

const createFakeCollection = () => {
  const chance = new Chance(11)
  const createFakeItem = id => ({
    id,
    name: chance.city({full: true}),
  })
  return {id: 0, name: 'Contacts', items: times(createFakeItem, 3)}
}

const CollectionPage = ({models = createFakeCollection(), onClick}) =>
  h(ModelList, {
    models: models.items,
    onClick,
  })

story.add('Collection', () =>
  h(CollectionPage, {
    onClick: item => e => action('collectionItem')(item.name, e.type),
  }),
)
