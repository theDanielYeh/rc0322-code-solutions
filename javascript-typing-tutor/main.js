var $phrase = document.querySelectorAll('span');
document.addEventListener('keydown', keylogger);
var index = 0;

function keylogger(event) {
  if (event.key === $phrase[index].textContent) {
    $phrase[index].className = 'green';
    index++;
    $phrase[index].className = 'black';
  } else {
    $phrase[index].className = 'red';
  }
}

// $phrase.forEach(keylogger);
