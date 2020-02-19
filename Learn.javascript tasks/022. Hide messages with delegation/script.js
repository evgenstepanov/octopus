container.onclick = function(event) {
  if (event.target.tagName != 'BUTTON') return;
  event.target.parentElement.remove();
};
