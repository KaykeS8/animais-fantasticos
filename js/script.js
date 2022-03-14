import ScrollSuave from './modules/scroll-suave.js';
import Accordion from './modules/accordion.js';
import TabNav from './modules/tabNav.js';
import ScrollAnima from './modules/scroll-anima.js';
import Modal from './modules/modal.js';
import initTooltip from './modules/tooltip.js';
import DropDownMenu from './modules/dropdown-menu.js';
import initFetchAnimal from './modules/animais-fetch.js';
import initFecthBitcoint from './modules/bitcoint-Animais.js';
import MenuMobile from './modules/menu-mobile.js';
import Funcinamento from './modules/funcionamento.js';

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const accordio = new Accordion('[data-anime="accordion"] dt');
accordio.init();

const tabNav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section');
tabNav.init();

const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]');
modal.init();

const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]');
menuMobile.init();

const scrollAnima = new ScrollAnima('[data-anime="scroll"');
scrollAnima.init();

const dropdownMenu = new DropDownMenu('[data-dropdown]');
dropdownMenu.init();

const funcionamento = new Funcinamento('[data-semana]', 'aberto');
funcionamento.init();

initTooltip();
initFetchAnimal();
initFecthBitcoint('https://blockchain.info/ticker', '.btc-preco');
