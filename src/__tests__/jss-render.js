import {render} from 'react-testing-library'

import JssProvider from 'react-jss/lib/JssProvider'
import {h} from '../hyper-script'

const generateClassName = (rule, styleSheet) =>
  `${styleSheet.options.classNamePrefix}-${rule.key}`

export const jssRender = (component) => render(
  h(JssProvider, {generateClassName: generateClassName}, component))
