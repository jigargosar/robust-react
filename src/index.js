import {Container} from '@cerebral/react'
import React from 'react'
import {render} from 'react-dom'
import 'roboto-fontface'
import App from './components/App'
import controller from './controller'
import registerServiceWorker from './registerServiceWorker'

render(
  <Container controller={controller}>
    {' '}
    <App />{' '}
  </Container>,
  document.querySelector('#root'),
)

registerServiceWorker()
