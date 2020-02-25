contents.addEventListener('click', function(e) {
  let a = event.target.closest('a');
  if (a && !confirm(`will you dare to go to ${a.getAttribute('href')}?`))
    event.preventDefault();
});
