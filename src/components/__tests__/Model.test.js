import 'dom-testing-library/extend-expect'
import {h} from '../../hyper-script'
import {getRendered} from '../../test-helpers'
import {createFakeModels} from '../__fixtures__/Model.fixture'
import {ModelList} from '../Model'

describe('Components', () => {
  describe('ModelList', () => {
    it('it should render without crashing', () => {
      expect(
        getRendered(h(ModelList, {models: createFakeModels()})),
      ).toMatchSnapshot()
    })
  })
})
