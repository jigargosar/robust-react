import {createGenerateClassName} from 'material-ui/styles'
import JssProvider from 'react-jss/lib/JssProvider'
/* eslint-disable babel/new-cap */
import {render} from 'react-testing-library'
import {h} from '../../hyper-script'
import S from '../../sanctuary'

const generateClassName1 = (rule, styleSheet) =>
  `${styleSheet.options.classNamePrefix}-${rule.key}`

const generateClassName2 = createGenerateClassName({
  dangerouslyUseGlobalCSS: true,
})

const generateClassName = S.I(true) ? generateClassName1 : generateClassName2
const withJss = component =>
  render(
    h(JssProvider, {generateClassName}, component),
    // component,
  )
export default withJss
