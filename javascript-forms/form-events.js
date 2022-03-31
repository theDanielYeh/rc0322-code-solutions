function handleFocus(event) {
  console.log('focus fired');
  console.log(event.target.name);
}

function handleBlur(event) {
  console.log('blur fired');
  console.log(event.target.name);
}

function handleInput(event) {
  console.log(event.target.name, event.target.value);
}

var $inputOne = document.querySelector('#user-name');
var $inputTwo = document.querySelector('#user-email');
var $textArea = document.querySelector('#user-message');

$inputOne.addEventListener('focus', handleFocus);
$inputOne.addEventListener('blur', handleBlur);
$inputOne.addEventListener('input', handleInput);

$inputTwo.addEventListener('focus', handleFocus);
$inputTwo.addEventListener('blur', handleBlur);
$inputTwo.addEventListener('input', handleInput);

$textArea.addEventListener('focus', handleFocus);
$textArea.addEventListener('blur', handleBlur);
$textArea.addEventListener('input', handleInput);
