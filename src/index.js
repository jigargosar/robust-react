import {Container} from '@cerebral/react'
import {Provider} from 'mobx-react'
import {render} from 'react-dom'
import 'roboto-fontface'
import App from './components/App'
import controller from './controller'
import {h} from './hyper-script'
import registerServiceWorker from './registerServiceWorker'
import rootStore from './stores/rootStore'

render(
  h(Provider, {...rootStore}, h(Container, {controller}, [h(App)])),
  document.querySelector('#root'),
)

registerServiceWorker()
