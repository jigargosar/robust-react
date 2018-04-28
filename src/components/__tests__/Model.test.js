import 'dom-testing-library/extend-expect'

import {render, Simulate} from 'react-testing-library'
import {h} from '../../hyper-script'
import {getRendered} from '../../test-helpers'
import {createFakeModels} from '../__fixtures__/Model.fixture'
import {ModelList} from '../Model'

describe('Components', () => {
  describe('ModelList', () => {
    it('should render without crashing', () => {
      expect(
        getRendered(h(ModelList, {models: createFakeModels()})),
      ).toMatchSnapshot()
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
