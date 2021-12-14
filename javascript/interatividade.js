function initTabNav() {
    const tabMenu = document.querySelectorAll('.js-tabMenu li')
    const tabContent = document.querySelectorAll('.js-tabContent section')

    if (tabMenu.length && tabContent.length) {

        tabContent[0].classList.add('ativo')

        function activeTab(index) {
            tabContent.forEach((section) => {
                section.classList.remove('ativo')
            })
            tabContent[index].classList.add('ativo')
        };

        tabMenu.forEach((item, index) => {
            item.addEventListener('click', () => {
                activeTab(index)
            });
        });
    };
};
initTabNav()


function initAccordion() {
    const accordionList = document.querySelectorAll('.js-accordion dt')
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
initAccordion();


function initScrollSection() {

    const linksInternos = document.querySelectorAll('a[href^="#"]')

    function scrollToSection(e) {
        e.preventDefault()
        const href = e.currentTarget.getAttribute('href')
        const section = document.querySelector(href)
        const topo = section.offsetTop;

        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    }

    linksInternos.forEach((link) => {
        link.addEventListener('click', scrollToSection)
    })
}
initScrollSection()


function initScrollWindow() {
    const sections = document.querySelectorAll('.js-scroll')

    if (sections.length) {

        function animarScroll() {
            sections.forEach((section) => {
                const windowMetade = window.innerHeight * 0.6
                const sectionTop = section.getBoundingClientRect().top
                const isSectionVisible = (sectionTop - windowMetade) < 0
                if (isSectionVisible) {
                    const ativar = 'ativo'
                    section.classList.add(ativar)
                }
            });
        };
        animarScroll();
    };

    window.addEventListener('scroll', animarScroll)
};
initScrollWindow()