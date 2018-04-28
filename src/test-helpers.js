import {render} from 'react-testing-library'

export const getRendered = component => render(component).container.firstChild

export {action} from '@storybook/addon-actions'
export {storiesOf} from '@storybook/react'
export {linkTo} from '@storybook/addon-links'
