import {Module} from 'cerebral/index'
import {h} from '../../hyper-script'
import App from '../App'
import jssRender from '../helpers/jss-render'
import withTestModule from '../helpers/withModule'

it('renders without crashing', () => {
  const {container} = jssRender(withTestModule(Module({}), h(App)))
  expect(container.firstChild).toMatchSnapshot()
})
