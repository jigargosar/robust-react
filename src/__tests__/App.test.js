import React from 'react'
import {render} from 'react-testing-library'
import App from '../App'
import JssProvider from 'react-jss/lib/JssProvider'

const generateClassName = (rule, styleSheet) =>
  `${styleSheet.options.classNamePrefix}-${rule.key}`

it('renders without crashing', () => {
  const {getByText, getByTestId, container} = render(
    <JssProvider generateClassName={generateClassName}>
      <App/>
    </JssProvider>
  )
  expect(container.firstChild).toMatchSnapshot()
})
