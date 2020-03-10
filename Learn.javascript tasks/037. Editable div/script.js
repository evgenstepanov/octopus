let textarea;
let view = document.getElementById('view');

view.onclick = function() {
  textarea = document.createElement('textarea');
  textarea.classList.add('edit');
  textarea.value = this.innerHTML;
  this.replaceWith(textarea);
  textarea.focus();

  textarea.onblur = function() {
    view.textContent = this.value;
    this.replaceWith(view);
  };
};
