import insertElement from '../../commons/functions/insertElement.js';
import Routes from '../../commons/Routes.js';

export default function createHomeLink(container) {
    const homeLink = insertElement('a', 'navbar-brand', container);
    homeLink.setAttribute('href', Routes.home);
    homeLink.appendChild(document.createTextNode('2I-Market'));
}
