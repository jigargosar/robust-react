import {h} from '../../hyper-script'
import App from '../App'
import withJss from '../helpers/withJss'
import withModule from '../helpers/withModule'

it('renders without crashing', () => {
  const {container} = withJss(withModule({}, h(App)))
  expect(container.firstChild).toMatchSnapshot()
})
