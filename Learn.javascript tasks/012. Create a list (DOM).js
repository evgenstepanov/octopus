/*
Write an interface to create a list from user input.
For every list item:
Ask a user about its content using prompt.
Create the <li> with it and add it to <ul>.
Continue until the user cancels the input (by pressing Esc or CANCEL in prompt).
All elements should be created dynamically.
If a user types HTML-tags, they should be treated like a text.
*/

let ul = document.createElement('ul');
document.body.prepend(ul);
while (true) {
  let pro = prompt('your wish');
  if (!pro) break;
  let li = document.createElement('li');
  li.textContent = pro;
  ul.append(li);
}
