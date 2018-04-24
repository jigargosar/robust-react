import expect_ from 'expect'

expect_.extend({
  toMatchSnapshot: () => ({message: 'Fake Snapshot For Storybook', pass: true}),
})

export {default as expect} from 'expect'

export {default as jest} from 'jest-mock'
export {
  after,
  afterEach,
  before,
  beforeEach,
  describe,
  fit,
  it,
  specs,
  xdescribe,
  xit,
} from 'storybook-addon-specifications'

export {storiesOf} from '@storybook/react'
export {action} from '@storybook/addon-actions'
export {linkTo} from '@storybook/addon-links'
