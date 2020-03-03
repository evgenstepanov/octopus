document.onmousedown = function(event) {
  let target = event.target;
  if (target.classList.contains('draggable')) {
    target.ondragstart = function() {
      return false;
    };
    event.preventDefault();

    let shiftX = event.clientX - target.getBoundingClientRect().left;
    let shiftY = event.clientY - target.getBoundingClientRect().top;

    target.style.position = 'absolute';
    target.style.zIndex = 1000;
    document.body.append(target);

    moveAt(event.pageX, event.pageY);

    function moveAt(pageX, pageY) {
      let targetTop = pageY - shiftY < 0 ? 0 : pageY - shiftY;
      let targetLeft = pageX - shiftX < 0 ? 0 : pageX - shiftX;

      let scrollHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight
      );

      let scrollWidth = document.documentElement.clientWidth;

      if (pageY + target.offsetHeight - shiftY > scrollHeight)
        targetTop = scrollHeight - target.offsetHeight;
      if (pageX + target.offsetWidth - shiftX > scrollWidth)
        targetLeft = scrollWidth - target.offsetWidth;

      target.style.left = targetLeft + 'px';
      target.style.top = targetTop + 'px';
    }

    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }

    document.addEventListener('mousemove', onMouseMove);

    target.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      target.onmouseup = null;
    };
  }
};
