import phoneData from "../../commons/datas/phoneData.js";
import getPhoneInstance from "../../services/phoneService.js";
import Routes from "../../commons/Routes.js";

export default function getPhoneCard(parent) {
    const content = [];
    phoneData.forEach((data) => {
        const phone = getPhoneInstance(data.id, data.brand, data.title, data.img, data.price);
        content.push(`
            <div id=${phone.id} class="card text-center" style="width: 18rem;margin: 5px;">
                <img src=${phone.img} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">${phone.brand}</h5>
                    <p class="card-text">${phone.title}</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">
                        ${phone.price}€
                    </li>
                    <li class="list-group-item">
                        <a href=${Routes.phone} class="btn btn-dark">Détails</a>
                    </li>
                </ul>
            </div>
        `);
    });
    parent.innerHTML = (`
        <div style="display: flex;">
            ${content.map((c) => (c)).join('')}
        </div>
    `);
}