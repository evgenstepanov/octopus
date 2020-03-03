'use strict';

let thumb = document.querySelector('.thumb');

thumb.onmousedown = function(event) {
  let shiftX = event.clientX - thumb.getBoundingClientRect().left;

  function onMouseMove(event) {
    let position = event.clientX - shiftX - slider.getBoundingClientRect().left;
    let right = slider.offsetWidth - thumb.offsetWidth;
    if (position < 0) position = 0;
    if (position > right) position = right;
    thumb.style.left = position + 'px';
  }

  document.addEventListener('mousemove', onMouseMove);

  document.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    document.onmouseup = null;
  };
};

thumb.ondragstart = function() {
  return false;
};
