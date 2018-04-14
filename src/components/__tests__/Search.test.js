import noCrashSnapshot from '../helpers/noCrashSnapshot'
import Search from '../Search'

it('renders without crashing', () => {
  noCrashSnapshot(Search)
})
