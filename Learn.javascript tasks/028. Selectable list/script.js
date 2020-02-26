ul.addEventListener('mousedown', function(e) {
  if (event.target.tagName === 'LI') {
    event.preventDefault();
    let selected = ul.querySelectorAll('.selected');
    if (event.ctrlKey || event.metaKey) {
      event.target.classList.add('selected');
    } else {
      for (let i of selected) {
        i.classList.remove('selected');
      }
      event.target.classList.add('selected');
    }
  }
});
