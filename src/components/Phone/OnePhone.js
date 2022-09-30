import insertElement from '../../commons/functions/insertElement.js';
import phoneData from "../../commons/datas/phoneData.js";

export default function getOnePhone() {
    const url = window.location.href;
    const phoneId = parseInt(url.slice(-1));
    const currentPhone = phoneData.find((phone) => phone.id === phoneId);
    const root = document.querySelector('#main-content');
    const title = insertElement('h1', 'content', root);
    title.appendChild(document.createTextNode(`${currentPhone.brand} - ${currentPhone.title}`));
    title.style.textAlign = 'center';
    const image = insertElement('div', '', root);
    image.setAttribute('style', 'display:flex;justify-content:center;align-items:center;')
    image.innerHTML = (`
        <div class="card text-center" style="width: 18rem;">
            <img src=${currentPhone.img} class="card-img-top" alt="...">
            <div class="card-body">
                <p class="card-text">${currentPhone.price}€ ${currentPhone.brand === 'Apple' ? `<span class="badge text-bg-warning">Promo -20%</span>` : ''}</p>
                <button type="button" class="btn btn-info">Ajouter au panier</button>
            </div>
        </div>
    `);
    return root;
}