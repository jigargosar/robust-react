import {Module} from 'cerebral/index'
import {h} from '../../hyper-script'
import App from '../App'
import jssRender from '../helpers/jss-render'
import withModule from '../helpers/withModule'

it('renders without crashing', () => {
  const {container} = jssRender(withModule(Module({}), h(App)))
  expect(container.firstChild).toMatchSnapshot()
})
