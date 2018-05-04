import ReactDom from 'react-dom'
import {div} from './hyper-script'
import registerServiceWorker from './registerServiceWorker'

ReactDom.render(div('HW'), document.getElementById('root'))

registerServiceWorker()
