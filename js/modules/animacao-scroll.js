export default function initScrollWindow() {
    const sections = document.querySelectorAll('[data-anime="scroll"')

    if (sections.length) {
        const windowMetade = window.innerHeight * 0.6
        function animarScroll() {
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top
                const isSectionVisible = (sectionTop - windowMetade) < 0
                const ativar = 'ativo'
                if (isSectionVisible) {
                    section.classList.add(ativar)
                } else {
                    section.classList.remove(ativar)
                }
            });
        };
        animarScroll();
        window.addEventListener('scroll', animarScroll)
    };
};
