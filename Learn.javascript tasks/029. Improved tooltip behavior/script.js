let message;
let currentElem = null;

function showMessage(elem) {
  message = document.createElement('div');
  message.classList.add('tooltip');
  message.innerText = elem.dataset.tooltip;
  house.append(message);
}

document.body.onmouseover = function(event) {
  if (currentElem) return;
  currentElem = event.target.closest('[data-tooltip]');
  if (!currentElem) return;
  showMessage(currentElem);
};

document.body.onmouseout = function(event) {
  if (!currentElem) return;
  if (event.relatedTarget.closest('[data-tooltip]') !== currentElem) {
    message.remove();
    currentElem = null;
  }
};
