import {Container} from '@cerebral/react'
import {Controller, Module} from 'cerebral'
import {h} from '../../hyper-script'
import Header from '../Header'
import jssRender from '../helpers/jss-render'

const withTestModule = (testModule, component) =>
  h(Container, {controller: Controller(testModule)}, [component])

it('renders without crashing', () => {
  const testModule = Module({
    state: {},
    signals: {},
  })

  const {container} = jssRender(withTestModule(testModule, h(Header)))
  expect(container.firstChild).toMatchSnapshot()
})
