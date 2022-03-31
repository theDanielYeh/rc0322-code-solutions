var $body = document.querySelector('body');
var $button = document.querySelector('button');
$button.addEventListener('click', switcher);

function switcher(event) {
  if ($button.className === 'yellow') {
    $button.className = 'black';
    $body.className = 'mother-black';
  } else if ($button.className === 'black') {
    $button.className = 'yellow';
    $body.className = 'mother-white';
  }
}
