thumbs.addEventListener('click', function(e) {
  let a = event.target.closest('a');
  if (!a && !thumbs.contains(a)) return;
  event.preventDefault();
  console.log(a);
});
