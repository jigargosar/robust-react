import {setConsoleOptions, withConsole} from '@storybook/addon-console'
import {setOptions} from '@storybook/addon-options'
import {addDecorator, configure, setAddon} from '@storybook/react'

setConsoleOptions({
  panelExclude: [],
})

addDecorator((storyFn, context) => withConsole()(storyFn)(context))
setOptions({
  /**
   * name to display in the top left corner
   * @type {String}
   */
  name: 'Storybook',
  /**
   * URL for name in top left corner to link to
   * @type {String}
   */
  url: '#',
  /**
   * show story component as full screen
   * @type {Boolean}
   */
  // goFullScreen: false,
  /**
   * display panel that shows a list of stories
   * @type {Boolean}
   */
  // showStoriesPanel: true,
  /**
   * display panel that shows addon configurations
   * @type {Boolean}
   */
  // showAddonPanel: true,
  /**
   * display floating search box to search through stories
   * @type {Boolean}
   */
  // showSearchBox: false,
  /**
   * show addon panel as a vertical panel on the right
   * @type {Boolean}
   */
  // addonPanelInRight: false,
  /**
   * sorts stories
   * @type {Boolean}
   */
  // sortStoriesByKind: false,
  /**
   * regex for finding the hierarchy separator
   * @example:
   *   null - turn off hierarchy
   *   /\// - split by `/`
   *   /\./ - split by `.`
   *   /\/|\./ - split by `/` or `.`
   * @type hierarchySeparator:Regex
   */
  hierarchySeparator: /\/|\./,
  /**
   * regex for finding the hierarchy root separator
   * @example:
   *   null - turn off mulitple hierarchy roots
   *   /\|/ - split by `|`
   * @type hierarchyRootSeparator:Regex
   */
  hierarchyRootSeparator: /\|/,
  /**
   * sidebar tree animations
   * @type {Boolean}
   */
  // sidebarAnimations: true,
  /**
   * id to select an addon panel
   * @type {String}
   */
  // selectedAddonPanel: undefined, // The order of addons in the "Addon panel" is
  // the same as you import them in 'addons.js'.
  // The first panel will be opened by default
  // as you run Storybook
  /**
   * enable/disable shortcuts
   * @type {Boolean}
   */
  enableShortcuts: true, // true by default
})

const req = require.context('../src', true, /__stories__/)
// const req2 = require.context('../src/unified', true, /\.js$/)
function loadStories() {
  // require('../src/stories')
  // req2.keys().forEach(req2)
  req.keys().forEach(req)
}

configure(loadStories, module)
