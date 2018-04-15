import {Chance} from 'chance'
import {h} from '../../../hyper-script'
import S from '../../../sanctuary'
import withJss from './withJss'
import withModule from './withModule'

const chance = Chance(123)

const initialCollections = S.pipe(
  [
    S.range(0),
    S.reverse,
    S.map(i => ({id: i, text: chance.country({full: true})})),
  ],
  20,
)

export default function noCrashSnapshot(component) {
  const {container} = withJss(
    withModule(
      {
        state: {
          collections: initialCollections,
        },
      },
      h(component),
    ),
  )
  expect(container.firstChild).toMatchSnapshot()
}
