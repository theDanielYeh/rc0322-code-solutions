var $onButton = document.querySelector('button.open');
var $offButton = document.querySelector('button.no');
var $modal = document.querySelector('.modal-hidden');
// var $modalBox = document.querySelector('.modal-box-hidden');

$onButton.addEventListener('click', switchOn);
$offButton.addEventListener('click', switchOff);

function switchOn(event) {
  $modal.className = 'modal-show';
  // $modalBox.className = 'modal-box-show';
  // $offButton.className = 'modal-box-show';
}

function switchOff(event) {
  $modal.className = 'modal-hidden';
  // $modalBox.className = 'modal-box-hidden';
  // $offButton.className = 'modal-box-hidden';
}
