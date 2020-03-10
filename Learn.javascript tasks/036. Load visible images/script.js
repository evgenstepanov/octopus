function isVisible(elem) {
  let elemCoords = elem.getBoundingClientRect();
  let doc = document.documentElement.clientHeight;
  if (elemCoords.bottom > 0 && elemCoords.bottom < doc) return true;
  if (elemCoords.top > 0 && elemCoords.top < doc) return true;
  return false;
}

function showVisible() {
  for (let img of document.querySelectorAll('img')) {
    let realSrc = img.dataset.src;
    if (!realSrc) continue;

    if (isVisible(img)) {
      img.src = realSrc;
      img.dataset.src = '';
    }
  }
}

window.addEventListener('scroll', showVisible);
showVisible();
