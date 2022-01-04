export default function initToltip() {
    const toltips = document.querySelectorAll('[data-tooltip]')

    toltips.forEach((item) => {
        item.addEventListener('mouseover', onMouseOver)
    })

    function onMouseOver(e) {
        const tooltipBox = criarTooltipBox(this)
        tooltipBox.style.top = e.pageY + 'px'
        tooltipBox.style.left = e.pageX + 'px'

        onMouseMove.tooltipBox = tooltipBox
        this.addEventListener('mousemove', onMouseMove)

        onMouseLeave.tooltipBox = tooltipBox
        onMouseLeave.element = this
        this.addEventListener('mouseleave', onMouseLeave)
    }

    const onMouseLeave = {
        handleEvent() {
            this.tooltipBox.remove()
            this.element.removeEventListener('mouseleave', onMouseLeave)
            this.element.removeEventListener('mousemove', onMouseMove)

        }
    }

    const onMouseMove = {
        handleEvent(e) {
            this.tooltipBox.style.top = e.pageY + 20 + 'px'
            this.toltipBox.style.left = e.pageX + 20 + 'px'
        }
    }

    function criarTooltipBox(element) {
        const tooltipBox = document.createElement('div')
        const text = element.getAttribute('aria-label')
        tooltipBox.classList.add('tooltip')
        tooltipBox.innerText = text
        document.body.appendChild(tooltipBox)
        return tooltipBox
    }
}