export default function outsideClick(element, events, callback) {
  const html = document.documentElement;
  const outside = 'data-outside';

  function handleOutSideClick(e) {
    if (!element.contains(e.target)) {
      element.removeAttribute(outside);
      events.forEach((userEvent) => {
        html.addEventListener(userEvent, handleOutSideClick);
      });
      html.removeEventListener('click', handleOutSideClick);
      callback();
    }
  }

  if (!element.hasAttribute(outside)) {
    events.forEach((userEvent) => {
      setTimeout(() => { html.addEventListener(userEvent, handleOutSideClick); });
    });
    element.setAttribute(outside, '');
  }
}
