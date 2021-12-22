var input = document.getElementById('input');
var rus = document.getElementById('Results');
console.log(input);
console.log(rus);

function grade() {
  var inputValue = input.value;

  rus.style.display = 'block';

  console.log(inputValue);

  if (inputValue > 100) rus.innerHTML = 'Invalid Value ';
  else if (inputValue >= 80) rus.innerHTML = 'Youer Grade is A+';
  else if (inputValue >= 70) {
    rus.innerHTML = 'Youer Grade is A';
  } else if (inputValue >= 60) {
    rus.innerHTML = 'Youer Grade is B';
  } else if (inputValue >= 50) {
    rus.innerHTML = 'Youer Grade is C';
  } else if (inputValue >= 40) {
    rus.innerHTML = 'Youer Grade is D';
  } else {
    rus.innerHTML = 'You are fail';
  }
}
