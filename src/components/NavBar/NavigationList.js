import insertElement from '../../commons/functions/insertElement.js';
import Routes from '../../commons/Routes.js';

const navigationItems = [{
    href: Routes.phone,
    name: 'Smartphone',
}, {
    href: Routes.computer,
    name: 'Ordinateur',
}, {
    href: Routes.console,
    name: 'Console',
}, {
    href: Routes.appliances,
    name: 'Eléctroménager',
}];

export default function createNavigationList(container) {
    const navList = insertElement('ul', 'navbar-nav me-auto mb-2 mb-lg-0', container);
    navigationItems.forEach((navigationItem) => {
        const navListItem = insertElement('li', 'nav-item', navList);
        const navListItemLink = insertElement('a', 'nav-link', navListItem);
        navListItemLink.setAttribute('href', navigationItem.href);
        navListItemLink.appendChild(document.createTextNode(navigationItem.name));
    });
}
