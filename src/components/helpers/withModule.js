import {Container} from '@cerebral/react'
import {Controller} from 'cerebral'
import {Module} from 'cerebral/index'
import {h} from '../../hyper-script'

const withModule = (module, component) =>
  h(Container, {controller: Controller(Module(module))}, [component])

export default withModule
