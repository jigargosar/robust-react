import {action} from '@storybook/addon-actions'
import {linkTo} from '@storybook/addon-links'
import LinkTo from '@storybook/addon-links/react'
import {storiesOf} from '@storybook/react'

import {div} from './hyper-script'

export {action, storiesOf, linkTo, LinkTo}

const centerDecorator = story =>
  div(
    {
      style: {
        padding: '16px 0',
        backgroundColor: '#ddd',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
    },
    [
      div({style: {flex: '1 1 auto', minWidth: 0, maxWidth: '80%'}}, [
        // h(Paper, [story()]),
        story(),
      ]),
    ],
  )

export {centerDecorator}
