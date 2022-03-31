var $taskList = document.querySelector('.task-list');
$taskList.addEventListener('click', firstFunction);
function firstFunction(event) {
  console.log(event.target);
  console.log(event.target.tagName);
  if (event.target.tagName === 'BUTTON') {
    var $closest = event.target.closest('.task-list-item');
    console.log($closest);
    $closest.remove();
  }
}
