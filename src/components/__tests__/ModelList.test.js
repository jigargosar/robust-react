import 'dom-testing-library/extend-expect'
import {head} from 'ramda'

import {render, Simulate} from 'react-testing-library'
import {h} from '../../hyper-script'
import {getRendered} from '../../test-helpers'
import {createFakeModels} from '../__fixtures__/Model.fixture'
import {ModelList} from '../ModelList'

describe('Components', () => {
  describe('ModelList', () => {
    it('should render multiple items without crashing', () => {
      expect(
        getRendered(h(ModelList, {models: createFakeModels()})),
      ).toMatchSnapshot()
    })

    it('should render single items without crashing', () => {
      expect(
        getRendered(h(ModelList, {models: head(createFakeModels())})),
      ).toMatchSnapshot()
    })

    it('should render empty list', () => {
      expect(getRendered(h(ModelList, {models: []}))).toMatchSnapshot()
    })

    it('should call onClick handler with model and event', () => {
      const models = createFakeModels()
      const modelToClick = models[0]

      const {getByText} = render(
        h(ModelList, {
          models,
          onClick: m => e => {
            expect(m).toBe(modelToClick)
            expect(e.type).toEqual('click')
          },
        }),
      )

      Simulate.click(getByText(modelToClick.name))
      expect.assertions(2)
    })
  })
})
