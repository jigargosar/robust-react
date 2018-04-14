/* eslint-disable babel/new-cap */
import {render} from 'react-testing-library'
import JssProvider from 'react-jss/lib/JssProvider'
import {createGenerateClassName} from 'material-ui/styles'
import S from '../../sanctuary'
import {H} from '../../hyper-script'

const generateClassName1 = (rule, styleSheet) =>
  `${styleSheet.options.classNamePrefix}-${rule.key}`

const generateClassName2 = createGenerateClassName({
  dangerouslyUseGlobalCSS: true,
})

const generateClassName = S.I(true) ? generateClassName1 : generateClassName2
const jssRender = component =>
  render(
    H(JssProvider, {generateClassName}, component),
    // component,
  )
export default jssRender