import getHome from './components/Home/index.js';
import getPhone from './components/Phone/index.js';
import getConsole from './components/Console/index.js';
import getComputer from './components/Computer/index.js';
import getAppliances from './components/Appliances/index.js';

import Routes from './commons/Routes.js';

const router = async (route) => {
    const content = document.querySelector('#main-content');
    [...content.childNodes].forEach((item) => {
        content.removeChild(item);
    });
    switch (route) {
        case Routes.home:
            content.appendChild(getHome());
            break;
        case Routes.phone:
            content.appendChild(getPhone());
            break;
        case Routes.console:
            content.appendChild(getConsole());
            break;
        case Routes.computer:
            content.appendChild(getComputer());
            break;
        case Routes.appliances:
            content.appendChild(getAppliances());
            break;
        default:
            content.appendChild(null);
            break;
    }
};

export default router;
