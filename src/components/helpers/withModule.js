import {Container} from '@cerebral/react'
import {Controller} from 'cerebral'
import {h} from '../../hyper-script'

const withModule = (module, component) =>
  h(Container, {controller: Controller(module)}, [component])

export default withModule
