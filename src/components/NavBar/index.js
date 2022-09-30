import insertElement from '../../commons/functions/insertElement.js';

import createHomeLink from './HomeLink.js';
import createToggleButton from './ToggleButton.js';
import createNavigationContainer from './NavigationContainer.js';

export default function createNavBar(app) {
    const navBar = insertElement('nav', 'navbar navbar-expand-lg navbar-dark bg-dark', app);
    const container = insertElement('div', 'container-fluid', navBar);
    createHomeLink(container);
    createToggleButton(container);
    createNavigationContainer(container);
}