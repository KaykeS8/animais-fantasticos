export default function initFecthBitcoint() {
  async function puxarBitcoint(url) {
    try {
      const bitcointResponse = await fetch(url);
      const bitcointJson = await bitcointResponse.json();
      const preco = document.querySelector('.btc-preco');
      preco.innerText = (1000 / bitcointJson.BRL.sell).toFixed(4);
    } catch (erro) {
      console.log(erro);
    }
  }
  puxarBitcoint('https://blockchain.info/ticker');
}
