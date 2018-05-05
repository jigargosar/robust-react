import {action} from '@storybook/addon-actions'
import {storiesOf} from '@storybook/react'
import {h} from 'utils/src/hyper-script-utils'
import {centerDecorator} from '../../storybook-helpers'
import {createFakeModels} from '../__fixtures__/Model.fixture'
import {ModelTable} from '../ModelTable'

const story = storiesOf('Components|Model.Table', module).addDecorator(
  centerDecorator,
)

story.add('basic', () =>
  h(ModelTable, {
    models: createFakeModels(),
    onClick: model => event => action('onClick')(model, event.type),
  }),
)
story.add('with primaryRenderer', () =>
  h(ModelTable, {
    models: createFakeModels(),
    primaryRenderer: model => `${model.name} (id:${model.id})`,
    onClick: model => event => action('onClick')(model, event.type),
  }),
)
