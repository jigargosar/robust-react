import React from 'react'
import App from '../App'
import jssRender from './helpers/jss-render'

it('renders without crashing', () => {
  const {container} = jssRender(<App />)
  expect(container.firstChild).toMatchSnapshot()
})
