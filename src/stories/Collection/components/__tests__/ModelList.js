import 'dom-testing-library/extend-expect'
import {render} from 'react-testing-library'
import {h} from '../../../../hyper-script'
import {ModelList} from '../ModelList'

it('should render without crashing', () => {
  const {container} = render(h(ModelList, {models: []}))
  expect(container.firstChild).toMatchSnapshot()
})
