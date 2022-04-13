var $rightArrow = document.querySelector('#right-arrow');
var $leftArrow = document.querySelector('#left-arrow');
var $img = document.querySelectorAll('img');
var $dot = document.querySelectorAll('.r2 > i');
var $dotMom = document.querySelector('.r2');

$dotMom.addEventListener('click', doThis);
function doThis(event) {
  for (var i = 0; i < $dot.length; i++) {
    if ($dot[i].className === 'fas fa-dot-circle') {
      $dot[i].className = 'fas fa-circle';
      $img[i].className = 'hidden';
    } else if (event.target.className === 'fas fa-circle') {
      event.target.className = 'fas fa-dot-circle';
      for (var j = 0; j < $dot.length; j++) {
        if ($dot[j].className === 'fas fa-dot-circle') {
          $img[j].className = 'show';
        }
      }
    }
  }
  clearInterval(intervalID);
  autoForward();
}

var intervalID;
autoForward();

$rightArrow.addEventListener('click', forwardPic);
function forwardPic(event) {
  for (var i = 0; i < $img.length; i++) {
    if ($img[i].className === 'show' && i !== $img.length - 1) {
      $img[i].className = 'hidden';
      $img[i].nextElementSibling.className = 'show';
      $dot[i].className = 'fas fa-circle';
      $dot[i].nextElementSibling.className = 'fas fa-dot-circle';
      clearInterval(intervalID);
      autoForward();
      break;
    } else if ($img[i].className === 'show' && i === $img.length - 1) {
      $img[i].className = 'hidden';
      $img[0].className = 'show';
      $dot[i].className = 'fas fa-circle';
      $dot[0].className = 'fas fa-dot-circle';
      clearInterval(intervalID);
      autoForward();
    }
  }
}

$leftArrow.addEventListener('click', backwardPic);
function backwardPic(event) {
  for (var i = $img.length - 1; i >= 0; i--) {
    if ($img[i].className === 'show' && i !== 0) {
      $img[i].className = 'hidden';
      $img[i - 1].className = 'show';
      $dot[i].className = 'fas fa-circle';
      $dot[i - 1].className = 'fas fa-dot-circle';
      clearInterval(intervalID);
      autoForward();
      break;
    } else if ($img[i].className === 'show' && i === 0) {
      $img[i].className = 'hidden';
      $img[$img.length - 1].className = 'show';
      $dot[i].className = 'fas fa-circle';
      $dot[$dot.length - 1].className = 'fas fa-dot-circle';
      clearInterval(intervalID);
      autoForward();
    }
  }
}

// var intervalID = setInterval(autoForward, 3000);

function autoForward() {

  intervalID = setInterval(function () {
    for (var i = 0; i < $img.length; i++) {
      if ($img[i].className === 'show' && i !== $img.length - 1) {
        $img[i].className = 'hidden';
        $img[i].nextElementSibling.className = 'show';
        $dot[i].className = 'fas fa-circle';
        $dot[i].nextElementSibling.className = 'fas fa-dot-circle';
        break;
      } else if ($img[i].className === 'show' && i === $img.length - 1) {
        $img[i].className = 'hidden';
        $img[0].className = 'show';
        $dot[i].className = 'fas fa-circle';
        $dot[0].className = 'fas fa-dot-circle';
      }
    }
  }, 3000);

}
