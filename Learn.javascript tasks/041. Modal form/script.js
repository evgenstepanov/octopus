document.getElementById('show-button').onclick = function() {
  showPrompt('Enter something<br>...smart :)', function(value) {
    alert('You entered: ' + value);
  });
};

function makeForm(text) {
  let backGroundForm = document.createElement('div');
  backGroundForm.className = 'background-form';
  document.body.append(backGroundForm);
  document.body.style.overflow = 'hidden';

  let container = document.getElementById('prompt-form-container');
  let message = document.getElementById('prompt-message');
  container.style.display = 'block';
  message.innerHTML = text;
}

function removeForm() {
  document.querySelector('.background-form').remove();
  document.getElementById('prompt-form-container').style.display = 'none';
  document.onkeydown = '';
}

function showPrompt(text, func) {
  makeForm(text);
  let form = document.forms[0];
  form.text.focus();

  form.onsubmit = function() {
    let promptText = form.text.value;
    if (promptText === '') return false;
    func(promptText);
    removeForm();
    return false;
  };

  function cancel() {
    func(null);
    removeForm();
    console.log('cancel');
  }

  form.cancel.onclick = cancel;
  document.onkeydown = function(event) {
    if (event.code === 'Escape') {
      console.log('esc');
      cancel();
    }
  };

  let lastElem = form.elements[form.elements.length - 1];
  let firstElem = form.elements[0];

  lastElem.onkeydown = function(e) {
    if (e.key == 'Tab' && !e.shiftKey) {
      console.log(firstElem);
      firstElem.focus();
      return false;
    }
  };

  firstElem.onkeydown = function(e) {
    if (e.key == 'Tab' && e.shiftKey) {
      lastElem.focus();
      return false;
    }
  };
}
