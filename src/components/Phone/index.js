import insertElement from '../../commons/functions/insertElement.js';
import getPhoneCards from './PhoneCard.js';

export default function getPhone() {
    const root = document.querySelector('#main-content');
    const title = insertElement('h1', 'content', root);
    title.appendChild(document.createTextNode('Smartphone'));
    title.style.textAlign = 'center';
    getPhoneCards(root);
    return root;
}