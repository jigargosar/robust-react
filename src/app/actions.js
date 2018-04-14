import {increment as inc, set} from 'cerebral/operators'
import {props, state} from 'cerebral/tags'

export const increment = inc(state`searchText`, 1)
export const decrement = inc(state`searchText`, -1)

export const setSearchText = set(state`searchText`, props`searchText`)
