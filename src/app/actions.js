import {set} from 'cerebral/operators'
import {props, state} from 'cerebral/tags'

export const updateSearchText = set(state`searchText`, props`value`)
