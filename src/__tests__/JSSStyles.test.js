// import {SheetsRegistry} from 'jss'
import {withStyles} from 'material-ui'
import {compose} from 'ramda'
import {render} from 'react-testing-library'
import {div, h} from '@jigargosar/utils'

// const sheets = new SheetsRegistry()

const Button = compose(
  withStyles({
    root: {
      color: 'green',
    },
  }),
)(({classes}) => div({className: classes.root}, 'OK'))

it('should render with styles', () => {
  const {container} = render(h(Button))
  // console.log(container)
  expect(container.firstChild).toMatchSnapshot('foo')
})
