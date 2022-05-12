/* exported intersection */
function intersection(first, second) {
  var Array = [];
  for (var i = 0; i < first.length; i++) {
    if (second.includes(first[i]) === true) {
      Array.push(first[i]);
    }
  }
  return Array;
}

// copy code over from difference, but change if condition to true
