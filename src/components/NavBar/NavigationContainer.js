import insertElement from '../../commons/functions/insertElement.js';

import createNavigationList from './NavigationList.js';
import createSearchForm from './SearchForm.js';

export default function createNavigationContainer(container) {
    const navContainer = insertElement('div', 'collapse navbar-collapse', container);
    navContainer.setAttribute('id', 'navbarSupportedContent');
    createNavigationList(navContainer);
    createSearchForm(navContainer);
}
