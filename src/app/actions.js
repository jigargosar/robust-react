import {set} from 'cerebral/operators'
import {props, state} from 'cerebral/tags'

export function increment({state: s}) {
  s.set('count', state.get('count') + 1)
}

export function decrement({state: s}) {
  s.set('count', state.get('count') - 1)
}

export const setSearchText = set(state`searchText`, props`setSearchText`)
