import {action} from '@storybook/addon-actions'
import {storiesOf} from '@storybook/react'
import {centerPaper} from '../../centerPaper'
import {h} from '../../hyper-script'
import {createFakeModels} from '../__fixtures__/Model.fixture'
import {ModelList} from '../Model'

const story = storiesOf('Components | ModelList', module).addDecorator(
  centerPaper,
)

story.add('basic', () =>
  h(ModelList, {
    models: createFakeModels(),
    onClick: model => event => action('onClick')(model, event.type),
  }),
)
story.add('with primaryRenderer', () =>
  h(ModelList, {
    models: createFakeModels(),
    primaryRenderer: model => `${model.name} (id:${model.id})`,
    onClick: model => event => action('onClick')(model, event.type),
  }),
)
