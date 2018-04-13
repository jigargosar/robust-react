import React from 'react'
import App from '../App'
import {jssRender} from './jss-render'

it('renders without crashing', () => {
  const {getByText, getByTestId, container} = jssRender(<App/>)
  expect(container.firstChild).toMatchSnapshot()
})
