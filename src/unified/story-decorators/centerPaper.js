import {Paper} from 'material-ui'
import {storiesOf} from '../../facade'
import {div, h} from '../../hyper-script'

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
    [div({style: {flex: 1, maxWidth: 300}}, [h(Paper, [story()])])],
  )

storiesOf('Unified | StoryDecorators', module).add('centerPaper', () => {
  return centerPaper(() => div('Story'))
})

export {centerPaper}
