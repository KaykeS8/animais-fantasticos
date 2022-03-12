export default function initFecthBitcoint(url, target) {
  fetch(url)
    .then((response) => response.json())
    .then((bitcoint) => {
      const btcPreco = document.querySelector(target);
      btcPreco.innerText = (1000 / bitcoint.BRL.sell).toFixed(4);
    }).catch((erro) => console.log(Error(erro)));
}
