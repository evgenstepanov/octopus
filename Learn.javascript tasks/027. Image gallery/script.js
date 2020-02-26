thumbs.addEventListener('click', function(e) {
  let a = event.target.closest('a');
  if (!a && !thumbs.contains(a)) return;
  event.preventDefault();
  largeImg.src = a.getAttribute('href');
  largeImg.alt = a.getAttribute('title');
});
