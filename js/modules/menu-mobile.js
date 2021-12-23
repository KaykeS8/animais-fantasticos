import outsideClick from './outside.js'

export default function initMenuMobile() {
    const menuButton = document.querySelector('[data-menu="button"]');
    const menuList = document.querySelector('[data-menu="list"]');
    const eventos = ['click', 'touchstart']

    if(menuButton) {
        function openMenu(e) {
            menuList.classList.add('active')
            menuButton.classList.add('active')
            outsideClick(menuList, eventos, () => {
                menuList.classList.remove('active')
                menuButton.classList.remove('active')
            })
        };
        eventos.forEach(item => menuButton.addEventListener(item, openMenu))
    }
}

