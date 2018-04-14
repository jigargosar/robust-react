import React from 'react'
import jssRender from '../../__tests__/helpers/jss-render'
import Header from '../Header'

it('renders without crashing', () => {
  const {container} = jssRender(<Header />)
  expect(container.firstChild).toMatchSnapshot()
})
