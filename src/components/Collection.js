/* eslint-disable no-console */

import {Button, Typography} from 'material-ui'
import {h} from '../hyper-script-utils'

export const Collection = ({collection, onGoBack}) =>
  h('div', [
    h(Typography, {variant: 'title'}, [collection.name]),
    h(Button, {onClick: onGoBack}, 'Back'),
  ])
