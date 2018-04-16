import {Provider} from 'mobx-react'
import {h} from '../../../hyper-script'
import rootStore from '../../../stores/rootStore'
import fakeAppModule from './fakeAppModule'
import withJss from './withJss'
import withModule from './withModule'

export default function noCrashSnapshot(component) {
  const {container} = withJss(
    withModule(fakeAppModule, h(Provider, {...rootStore}, [h(component)])),
  )
  expect(container.firstChild).toMatchSnapshot()
}
