var userClicks = [];

var $hotButton = document.querySelector('.hot-button');
var $clickCount = document.querySelector('.click-count');

function clickCounter(event) {
  $clickCount.textContent = 'Clicks: ' + ++userClicks;
  // console.log(userClicks);
  if (userClicks < 4) {
    $hotButton.className = 'hot-button cold';
  } else if (userClicks < 7) {
    $hotButton.className = 'hot-button cool';
  } else if (userClicks < 10) {
    $hotButton.className = 'hot-button tepid';
  } else if (userClicks < 13) {
    $hotButton.className = 'hot-button warm';
  } else if (userClicks < 16) {
    $hotButton.className = 'hot-button hot';
  } else if (userClicks >= 16) {
    $hotButton.className = 'hot-button nuclear';
  }
}
$hotButton.addEventListener('click', clickCounter);
