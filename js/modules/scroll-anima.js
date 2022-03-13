export default class ScrollAnima {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.windowMetade = window.innerHeight * 0.6;
    this.animarScroll = this.animarScroll.bind(this);
  }

  animarScroll() {
    this.sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = (sectionTop - this.windowMetade) < 0;
      const ativar = 'ativo';
      if (isSectionVisible) {
        section.classList.add(ativar);
      } else if (section.classList.contains(ativar)) {
        section.classList.remove(ativar);
      }
    });
  }

  init() {
    this.animarScroll();
    window.addEventListener('scroll', this.animarScroll);
    return this;
  }
}
