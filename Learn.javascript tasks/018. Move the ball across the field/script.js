function getCoords(elem) {
  let box = elem.getBoundingClientRect();

  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset
  };
}

field.onclick = function(event) {
  let fieldCoords = getCoords(field);

  let clickTop = fieldCoords.top + field.clientTop + ball.clientHeight / 2;
  let clickBottom = fieldCoords.top + field.clientTop + field.clientHeight - ball.clientHeight / 2;
  let clickLeft = fieldCoords.left + field.clientLeft + ball.clientWidth / 2;
  let clickRight = fieldCoords.left + field.clientLeft + field.clientWidth - ball.clientHeight / 2;

  let clickY = event.clientY + pageYOffset;
  let clickX = event.clientX + pageXOffset;

  if (clickY < clickTop) ball.style.top = 0 + 'px';
  if (clickY > clickBottom) ball.style.top = field.clientHeight - ball.clientHeight + 'px';
  if (clickY > clickTop && clickY < clickBottom) ball.style.top =
      clickY - fieldCoords.top - field.clientTop - ball.clientHeight / 2 + 'px';

  if (clickX < clickLeft) ball.style.left = 0 + 'px';
  if (clickX > clickRight) ball.style.left = field.clientWidth - ball.clientHeight + 'px';
  if (clickX > clickLeft && clickX < clickRight) ball.style.left = clickX - 
      fieldCoords.left -
      field.clientLeft -
      ball.clientHeight / 2 + 'px';
};
