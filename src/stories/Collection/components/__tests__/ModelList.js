// @flow

import 'dom-testing-library/extend-expect'
import {render} from 'react-testing-library'
import {h} from '../../../../hyper-script'
import type {ModelListItemProps, ModelListProps} from '../ModelList'
import {ModelList, ModelListItem} from '../ModelList'

describe('ModelList', () => {
  it('should render without crashing', () => {
    const models: ModelListProps = {models: []}
    const {container} = render(h(ModelList, models))
    expect(container.firstChild).toMatchSnapshot()
  })
  describe('Item', () => {
    it('should render without crashing', () => {
      const props: ModelListItemProps = {model: {name: 'Foo bar'}}
      const {container} = render(h(ModelListItem, props))
      expect(container.firstChild).toMatchSnapshot()
    })
  })
})
