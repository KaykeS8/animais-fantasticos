import ScrollSuave from './modules/scroll-suave.js';
import Accordion from './modules/accordion.js';
import TabNav from './modules/tabNav.js';
import initScrollWindow from './modules/animacao-scroll.js';
import initModal from './modules/modal.js';
import initTooltip from './modules/tooltip.js';
import initDropDownMenu from './modules/dropdown-menu.js';
import initMenuMobile from './modules/menu-mobile.js';
import initFuncinamento from './modules/funcionamento.js';
import initFetchAnimal from './modules/animais-fetch.js';
import initFecthBitcoint from './modules/bitcoint-Animais.js';

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const accordio = new Accordion('[data-anime="accordion"] dt');
accordio.init();

const tabNav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section');
tabNav.init();

initScrollWindow();
initModal();
initTooltip();
initDropDownMenu();
initMenuMobile();
initFuncinamento();
initFetchAnimal();
initFecthBitcoint();
