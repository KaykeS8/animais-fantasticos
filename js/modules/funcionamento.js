export default function initFuncinamento() {
  const funcionamento = document.querySelector('[data-semana]');
  const diasSemanas = funcionamento.dataset.semana.split(',').map(Number);
  const horarioSemana = funcionamento.dataset.horario.split(',').map(Number);

  const dataAgora = new Date();
  const diaAgora = dataAgora.getDay();
  const horasAgora = dataAgora.getHours();

  const semanaAberta = diasSemanas.indexOf(diaAgora) !== -1;
  const horarioAberto = (horasAgora >= horarioSemana[0] && horasAgora < horarioSemana[1]);
  if (semanaAberta && horarioAberto) {
    funcionamento.classList.add('aberto');
  } else {
    funcionamento.classList.add('fechado');
  }
}
