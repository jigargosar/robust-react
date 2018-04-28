import {render} from 'react-testing-library'

export const getRendered = component => render(component).container.firstChild
