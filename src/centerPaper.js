import {div} from './hyper-script'

const centerPaper = story =>
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

export {centerPaper}
