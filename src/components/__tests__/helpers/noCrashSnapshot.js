import {h} from '../../../hyper-script'
import fakeAppModule from './fakeAppModule'
import withJss from './withJss'
import withModule from './withModule'

export default function noCrashSnapshot(component) {
  const {container} = withJss(withModule(fakeAppModule, h(component)))
  expect(container.firstChild).toMatchSnapshot()
}
