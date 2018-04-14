import {h} from '../../hyper-script'
import withJss from '../helpers/withJss'
import withModule from '../helpers/withModule'
import Search from '../Search'

it('renders without crashing', () => {
  const {container} = withJss(withModule({}, h(Search)))
  expect(container.firstChild).toMatchSnapshot()
})
