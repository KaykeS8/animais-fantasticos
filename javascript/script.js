const h1 = document.querySelector('h1')
const div = document.querySelector('[data-cor]')


div.dataset.height = 500

console.log(div.dataset)
delete div.dataset.cor

const divs = document.querySelectorAll("[data-anima]")

divs.forEach(item => {
    item.classList.add(item.dataset.anima)
})