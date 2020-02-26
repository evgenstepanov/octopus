let currentElem = null;
let message;

house.onmouseover = function(event) {
  if (
    event.target.hasAttribute('data-tooltip') &&
    event.target.closest('div')
  ) {
    console.log(event.target);
    currentElem = event.target;
    showMessage(currentElem);
    console.log(message);
  }
};

house.onmouseout = function(event) {
  if (event.target === currentElem) {
    message.remove();
  }
};

function showMessage(elem) {
  message = document.createElement('div');
  message.classList.add('tooltip');
  message.innerText = elem.dataset.tooltip;
  house.append(message);
}
