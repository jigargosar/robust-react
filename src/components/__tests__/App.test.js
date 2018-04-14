import App from '../App'
import noCrashSnapshot from './helpers/noCrashSnapshot'

it('renders without crashing', () => {
  noCrashSnapshot(App)
})
