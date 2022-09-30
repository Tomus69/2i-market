import insertElement from '../../commons/functions/insertElement.js';

export default function createSearchForm(container) {
    const searchForm = insertElement('form', 'd-flex', container);
    searchForm.setAttribute('role', 'search');
    const searchInput = insertElement('input', 'form-control me-2', searchForm);
    searchInput.setAttribute('type', 'search');
    searchInput.setAttribute('Placeholder', 'Recherche ...');
    searchInput.setAttribute('aria-label', 'Search');
    const searchButton = insertElement('button', 'btn btn-outline-success', searchForm);
    searchButton.setAttribute('type', 'submit');
    searchButton.appendChild(document.createTextNode('Search'));
}
