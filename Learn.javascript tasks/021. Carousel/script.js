let li = carousel.firstElementChild;
let screen = li.offsetWidth * 3;
let shift = 0;
let lenghtOfCarousel = carousel.children.length * li.offsetWidth;

document.querySelector('.arrow.right').onclick = function() {
  shift -= screen;
  shift = Math.max(shift, screen - lenghtOfCarousel);
  carousel.style.transform = `translate(${shift}px)`;
};

document.querySelector('.arrow.left').onclick = function() {
  shift += screen;
  shift = Math.min(shift, 0);
  carousel.style.transform = `translate(${shift}px)`;
};
