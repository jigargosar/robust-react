// import {render} from 'react-testing-library'
import noCrashSnapshot from '../components/__tests__/helpers/noCrashSnapshot'

const currentEnv = jasmine.currentEnv_

export const describe = currentEnv.describe
export const it = currentEnv.it
export const beforeEach = currentEnv.beforeEach
export const afterEach = currentEnv.afterEach
export const xit = currentEnv.xit
export const xdescribe = currentEnv.xdescribe
export const fit = currentEnv.fit
export const after = () => {}
export const before = () => {}
export const expect = global.expect

export const action = () => {}
export const linkTo = () => {}
export const specs = spec => spec()

// export const snapshot = (name, story) => {
//   it(name, () => {
//     const {container} = render(story)
//     expect(container.firstChild).toMatchSnapshot()
//   })
// }

export const storiesOf = kind => ({
  add(name, func) {
    describe(kind, () => {
      describe(name, () => {
        it('should render without crashing', () => {
          func()
        })

        it('should match snapshot', () => {
          // const {container} = render(func())
          // expect(container.firstChild).toMatchSnapshot()
          noCrashSnapshot(func)
        })
      })
    })

    return this
  },
  addDecorator() {
    return this
  },
})
