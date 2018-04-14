import Header from '../Header'
import noCrashSnapshot from '../helpers/noCrashSnapshot'

it('renders without crashing', () => {
  noCrashSnapshot(Header)
})
