import outsideClick from './outside.js';

export default function initDropDownMenu() {
  const dropDownMenus = document.querySelectorAll('[data-dropdown]');

  function handleClick(e) {
    e.preventDefault();
    this.classList.toggle('active');
    outsideClick(this, ['touchstart', 'click'], () => {
      this.classList.remove('active');
    });
  }

  dropDownMenus.forEach((item) => {
    ['touchstart', 'click'].forEach(((userEvent) => {
      item.addEventListener(userEvent, handleClick);
    }));
  });
}
