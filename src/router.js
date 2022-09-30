import getHome from './components/Home/index.js';
import getPhone from './components/Phone/index.js';
import getConsole from './components/Console/index.js';
import getComputer from './components/Computer/index.js';
import getAppliances from './components/Appliances/index.js';
import getOnePhone from "./components/Phone/OnePhone.js";
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
        case `${Routes.phone}/1`:
        case `${Routes.phone}/2`:
        case `${Routes.phone}/3`:
        case `${Routes.phone}/4`:
        case `${Routes.phone}/5`:
            content.appendChild(getOnePhone());
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
