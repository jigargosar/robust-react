import ReactDom from 'react-dom'
import {div} from '@jigargosar/utils'
import registerServiceWorker from './registerServiceWorker'

ReactDom.render(div('HW'), document.getElementById('root'))

registerServiceWorker()
