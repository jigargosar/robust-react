import {create as createJSS} from 'jss'
import {createGenerateClassName, jssPreset} from 'material-ui/styles'

import JssProvider from 'react-jss/lib/JssProvider'
import {render} from 'react-testing-library'
import {h} from './hyper-script-utils'

const generateClassName = createGenerateClassName({
  dangerouslyUseGlobalCSS: true,
})

const jss = createJSS(jssPreset())

export const getRendered = component =>
  render(h(JssProvider, {jss, generateClassName}, [component])).container
    .firstChild
