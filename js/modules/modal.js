export default function initModal() {
    const botaoAbrir = document.querySelector('[data-modal="abrir"]')
    const botaoFechar = document.querySelector('[data-modal="fechar"]')
    const containerModal = document.querySelector('[data-modal="container"]')
    const cadastrouModal = document.querySelector('[data-modal="login"]')

    if (botaoAbrir && botaoFechar && containerModal && cadastrouModal) {
        function abrirModal(e) {
            e.preventDefault()
            containerModal.classList.add('ativo')
        }

        function fecharModal(e) {
            e.preventDefault()
            containerModal.classList.remove('ativo')
        }


        function cliqueForaDoModal(e) {
            if (e.target === this) {
                fecharModal(e)
            }
        }

        function cadastrou() {
            alert('Você cadastrou com sucesso')
        }

        botaoAbrir.addEventListener('click', abrirModal)
        botaoFechar.addEventListener('click', fecharModal)
        containerModal.addEventListener('click', cliqueForaDoModal)
        cadastrouModal.addEventListener('click', cadastrou)
    }
}