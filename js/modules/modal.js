export default class Modal {
  constructor(open, close, container) {
    this.botaoAbrir = document.querySelector(open);
    this.botaoFechar = document.querySelector(close);
    this.containerModal = document.querySelector(container);

    // bind this ao calback para
    // fazer referência ao objeto da classe
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.cliqueForaDoModal = this.cliqueForaDoModal.bind(this);
  }

  // Abre ou fecha o modal
  toggleModal() {
    this.containerModal.classList.toggle('ativo');
  }

  // Adiciona o evento de toggle ao modal
  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  // fecha o modal ao clicar do lado de fora
  cliqueForaDoModal(event) {
    if (event.target === this.containerModal) {
      this.toggleModal();
    }
  }

  // Adiciona os evento aos elementos do modal
  addModalEvent() {
    this.botaoAbrir.addEventListener('click', this.eventToggleModal);
    this.botaoFechar.addEventListener('click', this.eventToggleModal);
    this.containerModal.addEventListener('click', this.cliqueForaDoModal);
  }

  init() {
    if (this.botaoAbrir && this.botaoFechar && this.containerModal) {
      this.addModalEvent();
    }
    return this;
  }
}
