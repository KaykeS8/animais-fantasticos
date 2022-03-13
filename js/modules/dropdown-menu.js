import outsideClick from './outside.js';

export default class DropDownMenu {
  constructor(dropdowns) {
    this.dropDownMenus = document.querySelectorAll(dropdowns);
    this.activeDropDownMenu = this.activeDropDownMenu.bind(this);
    this.classActive = 'active';
    this.events = ['touchstart', 'click'];
  }

  activeDropDownMenu(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.toggle(this.classActive);
    outsideClick(element, this.events, () => {
      element.classList.remove(this.classActive);
    });
  }

  addDrowDownMenuEvents() {
    this.dropDownMenus.forEach((item) => {
      this.events.forEach(((userEvent) => {
        item.addEventListener(userEvent, this.activeDropDownMenu);
      }));
    });
  }

  init() {
    if (this.dropDownMenus.length) {
      this.addDrowDownMenuEvents();
    }
    return this;
  }
}
