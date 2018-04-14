import {h} from '../../hyper-script'
import withJss from './withJss'
import withModule from './withModule'

export default function noCrashSnapshot(component) {
  const {container} = withJss(withModule({}, h(component)))
  expect(container.firstChild).toMatchSnapshot()
}
