import Search from '../Search'
import noCrashSnapshot from './helpers/noCrashSnapshot'

it('renders without crashing', () => {
  noCrashSnapshot(Search)
})
