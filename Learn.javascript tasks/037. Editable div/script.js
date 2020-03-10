// ...your code...
// Note: <textarea> should have class="edit"
// my.css has styles to make it the same size as div

let textarea;
let view = document.getElementById('view');

view.onclick = function() {
  textarea = document.createElement('textarea');
  textarea.classList.add('edit');
  textarea.value = this.innerHTML;
  textarea.focus();
  this.replaceWith(textarea);
};

document.querySelector.onblur = function() {
  view.textContent = this.value;
  this.remove();
};
