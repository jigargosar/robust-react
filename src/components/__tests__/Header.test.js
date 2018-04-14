import React from 'react'
import Header from '../Header'
import jssRender from '../helpers/jss-render'

it('renders without crashing', () => {
  const {container} = jssRender(<Header />)
  expect(container.firstChild).toMatchSnapshot()
})
