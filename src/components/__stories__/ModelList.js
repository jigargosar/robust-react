import {action} from '@storybook/addon-actions'
import {storiesOf} from '@storybook/react'
import {centerDecorator} from '../../storybook-helpers'
import {h} from '../../hyper-script-utils'
import {createFakeModels} from '../__fixtures__/Model.fixture'
import {ModelList} from '../ModelList'

const story = storiesOf('Components|Model.List', module).addDecorator(
  centerDecorator,
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
