import {render} from 'react-testing-library'

export const storiesOf = function storiesOf(kind) {
  var api = {}
  api.add = (name, func) => {
    describe(kind, () => {
      snapshot(name, func())
    })
    return api
  }
  api.addDecorator = () => api
  return api
}
export const action = () => {}

export const linkTo = () => {}

export const specs = spec => {
  spec()
}

export const snapshot = (name, story) => {
  it(name, function() {
    const {container} = render(story)
    expect(container.firstChild).toMatchSnapshot()
  })
}

export const describe = jasmine.currentEnv_.describe
export const it = jasmine.currentEnv_.it
export const beforeEach = jasmine.currentEnv_.beforeEach
export const afterEach = jasmine.currentEnv_.afterEach
export const xit = jasmine.currentEnv_.xit
export const xdescribe = jasmine.currentEnv_.xdescribe
export const fit = jasmine.currentEnv_.fit
export const after = () => {}
export const before = () => {}
export const expect = global.expect
