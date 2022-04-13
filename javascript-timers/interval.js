var i = 3;

// function $decrement() {
//   if (i > 0) {
//     document.querySelector('.countdown-display').textContent = i;
//     i--;
//   } else if (i === 0) {
//     document.querySelector('.countdown-display').textContent = 'some text';
//     clearInterval(IntervalID);
//   }

// }

function $decrement() {
  document.querySelector('.countdown-display').textContent = i;
  i--;
  if (i < 0) {
    document.querySelector('.countdown-display').textContent = 'some text';
    clearInterval(IntervalID);
  }

}

var IntervalID = setInterval($decrement, 1000);
