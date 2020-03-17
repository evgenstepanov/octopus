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
}

function showPrompt(text, func) {
  makeForm(text);

  let form = document.forms[0];

  form.onsubmit = function() {
    let promptText = form.text.value;
    if (promptText === '') return false;
    func(promptText);
    removeForm();
    return false;
  };

  form.cancel.onclick = function() {
    func(null);
    removeForm();
  };
}
