import {h} from '../../hyper-script'
import Header from '../Header'
import withJss from '../helpers/withJss'
import withModule from '../helpers/withModule'

it('renders without crashing', () => {
  const {container} = withJss(withModule({}, h(Header)))
  expect(container.firstChild).toMatchSnapshot()
})
