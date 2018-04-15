import {Container} from '@cerebral/react'
import {render} from 'react-dom'
import 'roboto-fontface'
import App from './components/App'
import controller from './controller'
import {h} from './hyper-script'
import registerServiceWorker from './registerServiceWorker'

render(h(Container, {controller}, [App]), document.querySelector('#root'))

registerServiceWorker()
