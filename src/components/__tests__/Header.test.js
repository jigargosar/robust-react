import {Module} from 'cerebral'
import {h} from '../../hyper-script'
import Header from '../Header'
import withJss from '../helpers/withJss'
import withModule from '../helpers/withModule'

it('renders without crashing', () => {
  const testModule = Module({
    state: {},
    signals: {},
  })

  const {container} = withJss(withModule(testModule, h(Header)))
  expect(container.firstChild).toMatchSnapshot()
})
