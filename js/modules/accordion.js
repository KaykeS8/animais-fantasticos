export default function initAccordion() {
    const accordionList = document.querySelectorAll('[data-anime="accordion"] dt')
    if (accordionList.length) {
        const classAtivo = 'ativo';
        accordionList[0].nextElementSibling.classList.add(classAtivo)
        function activeAccordion() {
            this.classList.toggle(classAtivo)
            this.nextElementSibling.classList.toggle(classAtivo)
        }
        accordionList.forEach((item) => {
            item.addEventListener('click', activeAccordion)
        })
    };
}


console.log('accordion aqui')