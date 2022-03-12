import outsideClick from './outside.js';

export default class MenuMobile {
  constructor(menuButton, menuList, events) {
    this.menuButton = document.querySelector(menuButton);
    this.menuList = document.querySelector(menuList);
    this.classActive = 'active';
    this.openMenu = this.openMenu.bind(this);

    // Define touchstart e click como argumento
    // padrão de eventos com o usuario não define
    if (events === undefined) {
      this.events = ['touchstart', 'click'];
    } else {
      this.events = events;
    }
  }

  openMenu() {
    this.menuList.classList.add(this.classActive);
    this.menuButton.classList.add(this.classActive);
    outsideClick(this.menuList, this.events, () => {
      this.menuList.classList.remove(this.classActive);
      this.menuButton.classList.remove(this.classActive);
    });
  }

  addMenuMobileEvents() {
    this.events.forEach((item) => this.menuButton.addEventListener(item, this.openMenu));
  }

  init() {
    if (this.menuButton && this.menuList) {
      this.addMenuMobileEvents();
    }
    return this;
  }
}
