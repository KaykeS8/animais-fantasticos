export default function initDropDownMenu() {

}

const dropDownMenus = document.querySelectorAll('[data-dropdown]')

dropDownMenus.forEach((item) => {
    ['touchstart', 'click'].forEach((userEvent => {
        item.addEventListener(userEvent, handleClick)
    }))
});

function handleClick(e) {
    e.preventDefault()
    console.log(e)
    this.classList.toggle('active')
}

