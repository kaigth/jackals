// This is the pre loader file. Use it to pre load required vendor files
// or other important files that must load prior to the application loading.

// Our app needs CSS, add it to the dependency tree.
require('../sass/screen.scss')

import Application from './application/application';

const app = new Application();