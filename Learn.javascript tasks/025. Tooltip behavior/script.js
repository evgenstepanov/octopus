document.addEventListener('mouseover', function(event) {
  if (event.target.dataset.tooltip != undefined) {
    let targetCoords = event.target.getBoundingClientRect();
    let elem = document.createElement('div');
    elem.classList.add('tooltip');
    elem.innerHTML = event.target.dataset.tooltip;
    document.body.prepend(elem);

    let top = targetCoords.y - elem.offsetHeight - 5;
    elem.style.top =
      top < 5 ? (top = targetCoords.bottom + 5 + 'px') : top + 'px';

    let left =
      targetCoords.x + event.target.offsetWidth / 2 - elem.offsetWidth / 2;
    elem.style.left = left < 5 ? (left = 5 + 'px') : left + 'px';
  }
});

document.addEventListener('mouseout', function(event) {
  if (event.target.dataset.tooltip != undefined)
    document.querySelector('.tooltip').remove();
});
