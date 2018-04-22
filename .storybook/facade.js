import {
  action as actionReal,
  linkTo as linkToReal,
  storiesOf as storiesOfReal,
} from '@storybook/react'

import x from 'expect'

import {
  after as afterReal,
  afterEach as afterEachReal,
  before as beforeReal,
  beforeEach as beforeEachReal,
  describe as describeReal,
  fit as fitReal,
  it as itReal,
  specs as specsReal,
  xdescribe as xdescribeReal,
  xit as xitReal,
} from 'storybook-addon-specifications'

export const storiesOf = storiesOfReal
export const action = actionReal
export const linkTo = linkToReal
export const specs = specsReal
export const describe = describeReal
export const it = itReal

export const beforeEach = beforeEachReal
export const afterEach = afterEachReal
export const before = beforeReal
export const after = afterReal

export const xit = xitReal
export const fit = fitReal
export const xdescribe = xdescribeReal

x.extend({
  toMatchSnapshot: () => ({message: 'Fake Snapshot For Storybook', pass: true}),
})

export const expect = x
