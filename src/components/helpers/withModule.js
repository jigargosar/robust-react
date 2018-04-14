import {Container} from '@cerebral/react'
import {Controller} from 'cerebral'
import {h} from '../../hyper-script'

const withTestModule = (testModule, component) =>
  h(Container, {controller: Controller(testModule)}, [component])

export default withTestModule
