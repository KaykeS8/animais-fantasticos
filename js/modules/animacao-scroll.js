export default function initScrollWindow() {
  const sections = document.querySelectorAll('[data-anime="scroll"');
  const windowMetade = window.innerHeight * 0.6;

  function animarScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = (sectionTop - windowMetade) < 0;
      const ativar = 'ativo';
      if (isSectionVisible) {
        section.classList.add(ativar);
      } else if (section.classList.contains(ativar)) {
        section.classList.remove(ativar);
      }
    });
  }

  if (sections.length) {
    animarScroll();
    window.addEventListener('scroll', animarScroll);
  }
}
