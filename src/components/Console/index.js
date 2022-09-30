import insertElement from '../../commons/functions/insertElement.js';

export default function getConsole() {
    const root = document.querySelector('#main-content');
    const title = insertElement('h1', 'content', root);
    title.appendChild(document.createTextNode('Console'));
    title.style.textAlign = 'center';
    return root;
}