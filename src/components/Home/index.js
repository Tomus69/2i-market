import insertElement from '../../commons/functions/insertElement.js';
import createCarousel from '../AdCarousel/index.js';

export default function getHome() {
    const root = document.querySelector('#main-content');
    const title = insertElement('h1', 'content', root);
    title.appendChild(document.createTextNode('Home'));
    title.style.textAlign = 'center';
    createCarousel(root);
    return root;
}