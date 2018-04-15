import * as MR from 'mobx-react'
import * as R from 'ramda'

const injectObserve = R.compose(
  MR.inject((stores, props) => ({
    ...stores,
    ...props,
  })),
  MR.observer,
)

export default injectObserve
