import insertElement from '../../commons/functions/insertElement.js';

const carouselItems = [{
    id: "1",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1MOWmBlKI989Ulq2ceWgE-4e4SCfvjNoGJNNu2ZhnVIYT-okErpJzvqtvIFK1c7GtWaE&usqp=CAU",
    alt: "...",
}, {
    id: "2",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5hwgCbGE1vQmOIN3rej6uVR0kTXP_XC9tzMGDR_WjEmvzgpGgpmzX26s9fWm5G2FYv6Y&usqp=CAU",
    alt: "...",
}, {
    id: "3",
    src: "https://thumbs.dreamstime.com/b/belle-for%C3%AAt-tropicale-%C3%A0-l-itin%C3%A9raire-am%C3%A9nag%C3%A9-pour-amateurs-de-la-nature-de-ka-d-ang-36703721.jpg",
    alt: "...",
}];

export default function createCarousel(app) {
    const container = insertElement('div', 'carousel slide container content', app);
    container.setAttribute('id', 'carouselExampleSlidesOnly');
    container.setAttribute('data-bs-ride', 'carousel');
    const inner = insertElement('div', 'carousel-inner', container);
    carouselItems.forEach((carouselItem) => {
        const item = insertElement('div', 'carousel-item', inner);
        item.setAttribute('id', carouselItem.id);
        if (carouselItem.id === '1') {
            item.classList.add('active');
        }
        const image = insertElement('img', 'd-block w-100', item);
        image.setAttribute('src', carouselItem.src);
        image.setAttribute('alt', carouselItem.alt);
        image.setAttribute('style', 'margin-top:30px;height:200px');
    });
    let activeCarouselItemId = 1;
    const interval = setInterval(() => { 
        if (activeCarouselItemId === 3) {
            activeCarouselItemId = 1;
        } else {
            activeCarouselItemId += 1;
        }
        document.querySelectorAll('.carousel-item').forEach((item) => {
            item.classList.remove('active');
        });
        const activeCarouselItem = document.getElementById(`${activeCarouselItemId}`);
        if (activeCarouselItem === null) {
            clearInterval(interval);
            return;
        }
        activeCarouselItem.classList.add('active');
    }, 3000);
}