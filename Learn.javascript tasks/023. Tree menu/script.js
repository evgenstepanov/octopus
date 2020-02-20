for (let li of document.body.querySelectorAll('li')) {
  let span = document.createElement('span');
  li.prepend(span);
  span.prepend(span.nextSibling);
}

document.querySelector('.tree').addEventListener('click', event => {
  let ul = event.target.nextElementSibling;
  if (event.target.tagName === 'SPAN' && ul) {
    ul.hidden = !ul.hidden;
  }
});
