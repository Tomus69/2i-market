import createNavBar from './components/NavBar/index.js';
import router from './router.js';
import Routes from './commons/Routes.js';

document.body.onload = loadApp;

function loadApp() {
    if (window.location.hash === '') {
        history.pushState({}, '', Routes.home);
    }

    const app = document.createElement('div');
    app.setAttribute('id', 'root');
    document.body.appendChild(app);
    const root = document.querySelector('#root');

    createNavBar(root);

    const content = document.createElement('div');
    content.setAttribute('id', 'main-content');
    root.appendChild(content);

    router(window.location.hash).then();

    window.addEventListener('hashchange', () => {
        router(window.location.hash).then();
    });
}
