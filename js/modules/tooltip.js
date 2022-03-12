export default function InitToltip() {
  const toltips = document.querySelectorAll('[data-tooltip]');

  const onMouseMove = {
    handleEvent(e) {
      this.tooltipBox.style.top = `${e.pageY + 20}px`;
      this.toltipBox.style.left = `${e.pageX + 20}px`;
    },
  };

  const onMouseLeave = {
    handleEvent() {
      this.tooltipBox.remove();
      this.element.removeEventListener('mouseleave', onMouseLeave);
      this.element.removeEventListener('mousemove', onMouseMove);
    },
  };

  function criarTooltipBox(element) {
    const tooltipBox = document.createElement('div');
    const text = element.getAttribute('aria-label');
    tooltipBox.classList.add('tooltip');
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    return tooltipBox;
  }

  function onMouseOver(e) {
    const tooltipBox = criarTooltipBox(this);
    tooltipBox.style.top = `${e.pageY}px`;
    tooltipBox.style.left = `${e.pageX}px`;

    onMouseMove.tooltipBox = tooltipBox;
    this.addEventListener('mousemove', onMouseMove);

    onMouseLeave.tooltipBox = tooltipBox;
    onMouseLeave.element = this;
    this.addEventListener('mouseleave', onMouseLeave);
  }

  toltips.forEach((item) => {
    item.addEventListener('mouseover', onMouseOver);
  });
}
