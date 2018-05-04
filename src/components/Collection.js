/* eslint-disable no-console */

import {Button} from 'material-ui'
import {h} from '../hyper-script'

export const Collection = ({collection, onGoBack}) =>
  h('div', [collection.name, h(Button, {onClick: onGoBack}, 'Back')])
