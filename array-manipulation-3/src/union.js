/* exported union */
function union(first, second) {
  var Array = [];
  for (var i = 0; i < first.length; i++) {
    Array.push(first[i]);
  }
  for (var j = 0; j < second.length; j++) {
    if (first.includes(second[j]) === false) {
      Array.push(second[j]);
    }
  }
  return Array;
}

// one for loop that pushes entire first array into new array. a second loop that pushes values from second array if doesnt match
