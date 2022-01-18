import initAnimaNumero from './anima-numeros.js'
export default function initFetchAnimal() {
    async function fecthAnimais(url) {
        try {
            const animaisResponse = await fetch(url)
            const animaisJson = await animaisResponse.json()
            const numerosGrid = document.querySelector('.numeros-grid')
            animaisJson.forEach(animais => {
                const divAnimal = creatAnimal(animais)
                numerosGrid.appendChild(divAnimal)
            });
            initAnimaNumero();
        } catch (erro) {
            console.log(erro)
        }
    }

    function creatAnimal(animal) {
        const div = document.createElement('div')
        div.classList.add('numeros-animal')
        div.innerHTML = `<h3>${animal.specie}</h3>
                        <span data-numero>${animal.total}</span>
        `
        return div
    }

    fecthAnimais('./animaisapi.json')
}
