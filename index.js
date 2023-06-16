let input = document.getElementById('call');
let buttons = document.querySelectorAll("button");
let s = "";
let array = Array.from(buttons);
array.forEach(button => {
  button.addEventListener('click', (e) => {
    if (e.target.innerHTML === '=') {
      s = eval(s);
      input.value = s;
    } else if (e.target.innerHTML === 'AC') {
      s = "";
      input.value = s;
    } else if (e.target.innerHTML === 'Del') {
      s = s.substring(0, s.length - 1);
      input.value = s;
    } else {
      s = s + e.target.innerHTML;
      input.value = s;
    }
  });
});
 