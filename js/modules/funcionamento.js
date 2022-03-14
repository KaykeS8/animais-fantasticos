export default class Funcinamento {
  constructor(funcionamento, activeClass) {
    this.funcionamento = document.querySelector(funcionamento);
    this.activeClass = activeClass;
  }

  dadosOperation() {
    this.diasSemanas = this.funcionamento.dataset.semana.split(',').map(Number);
    this.horarioSemana = this.funcionamento.dataset.horario.split(',').map(Number);
  }

  dataNow() {
    this.dataAgora = new Date();
    this.diaAgora = this.dataAgora.getDay();
    this.horasAgora = this.dataAgora.getUTCHours() - 3;
  }

  itsOpen() {
    this.semanaAberta = this.diasSemanas.indexOf(this.diaAgora) !== -1;
    this.horarioAberto = (this.horasAgora >= this.horarioSemana[0] && this.horasAgora < this.horarioSemana[1]);
    return this.semanaAberta && this.horarioAberto;
  }

  activeOpen() {
    if (this.itsOpen()) {
      this.funcionamento.classList.add(this.activeClass);
    }
  }

  init() {
    if (this.funcionamento) {
      this.dadosOperation();
      this.dataNow();
      this.activeOpen();
    }
    return this;
  }
}
