document.addEventListener('scroll', function() {
  if (window.pageYOffset > document.documentElement.clientHeight) {
    arrowTop.style.display = 'table';
  } else {
    arrowTop.style.display = 'none';
  }
});

arrowTop.onclick = () => window.scrollTo(window.pageYOffset, 0);
