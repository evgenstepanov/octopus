function showNotification({ top = 0, right = 0, className, html }) {
  let elem = document.createElement('div');
  elem.className = 'notification';
  if (className) elem.classList.add(className);
  elem.style.top = top + 'px';
  elem.style.right = right + 'px';
  elem.innerHTML = html;
  document.body.append(elem);
  setTimeout(() => elem.remove(), 1500);
}

// test it
let i = 1;
setInterval(() => {
  showNotification({
    top: 10,
    right: 10,
    html: 'Hello ' + i++,
    className: 'welcome'
  });
}, 2000);
