let form = document.forms.calculator;

form.oninput = count;

function count() {
  let initial = +form.money.value;
  let interest = form.interest.value / 100;
  let years = form.months.value / 12;
  let result = Math.round(initial * (1 + interest * years));
  money_before.innerHTML = initial;
  money_after.innerHTML = result;
  height_after.style.height =
    result === 0
      ? height_before.style.height
      : (result / initial) * parseInt(height_before.style.height) + 'px';
}

count();
