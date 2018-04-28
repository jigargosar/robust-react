import 'dom-testing-library/extend-expect'
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
      expect(getRendered(h(ModelList, {models}))).toMatchSnapshot()
    })
  })
})
