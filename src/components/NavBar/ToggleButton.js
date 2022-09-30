import insertElement from '../../commons/functions/insertElement.js';

export default function createToggleButton(container) {
    const toggleButton = insertElement('button', 'navbar-toggler', container);
    toggleButton.setAttribute('type', 'button');
    toggleButton.setAttribute('data-bs-toggle', 'collapse');
    toggleButton.setAttribute('data-bs-target', '#navbarSupportedContent');
    toggleButton.setAttribute('aria-controls', 'navbarSupportedContent');
    toggleButton.setAttribute('aria-expanded', 'false');
    toggleButton.setAttribute('aria-label', 'Toggle navigation');
    insertElement('span', 'navbar-toggler-icon', toggleButton);
}
