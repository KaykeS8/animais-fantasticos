export default class ScrollAnima {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.windowMetade = window.innerHeight * 0.6;
    this.checkDistance = this.checkDistance.bind(this);
  }

  // Pega a distância de cada item em relação ao topo
  // do site.
  getDistance() {
    this.distance = [...this.sections].map((section) => {
      const offset = section.offsetTop;
      return {
        element: section,
        offset: Math.floor(offset - this.windowMetade),
      };
    });
  }

  // Verifica a distância em cada objeto
  // em relação ao scroll do site
  checkDistance() {
    this.distance.forEach((section) => {
      if (window.pageYOffset > section.offset) {
        section.element.classList.add('ativo');
      } else if (section.element.classList.contains('ativo')) {
        section.element.classList.remove('ativo');
      }
    });
  }

  // Metodo que inicia o scroll anima
  init() {
    if (this.sections) {
      this.getDistance();
      this.checkDistance();
      window.addEventListener('scroll', this.checkDistance);
    }
    return this;
  }

  // Remove o evento de scroll da página
  stop() {
    window.removeEventListener('scroll', this.checkDistance);
  }
}
