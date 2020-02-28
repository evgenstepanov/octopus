let message;
let currentElem = null;

function showMessage(elem) {
  message = document.createElement('div');
  message.classList.add('tooltip');
  message.innerText = elem.dataset.tooltip;
  house.append(message);
}

document.body.onmouseover = function(event) {
  // если mouseout не обнулил currentElem,
  // значит мы еще на целевом элементе или его детях ниче не меняем
  if (currentElem) return;

  // если элемент имеет атрибут для подсказки берем его как current
  // либо родитель элемента имеет атрибут, то
  // докапываемся до родителя и берем родителя как current
  currentElem = event.target.hasAttribute('data-tooltip')
    ? event.target
    : event.target.closest('[data-tooltip]');

  // никто не имеет атрибутов, ниче не делаем, уходим
  if (!currentElem) return;

  // currentElem избран, покажем его сообщение
  showMessage(currentElem);
  console.log(currentElem);
};

document.body.onmouseout = function(event) {
  // currentElem не был определен, нечего делать, игнорируем
  if (!currentElem) return;

  // если элемент куда уходим сам имеет нужный атрибут, но сам не currentElem
  // или имеет родителя с нужным артибутом, но родитель не currentElem
  // все чистим уходим создавать новое сообщение
  if (
    event.relatedTarget.closest('[data-tooltip]') !== currentElem &&
    event.relatedTarget !== currentElem
  ) {
    message.remove();
    currentElem = null;
  }
};
