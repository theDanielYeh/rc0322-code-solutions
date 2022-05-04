/* exported difference */
function difference(first, second) {
  var Array = [];
  for (var i = 0; i < first.length; i++) {
    if (second.includes(first[i]) === false) {
      Array.push(first[i]);
    }
  }
  for (var j = 0; j < second.length; j++) {
    if (first.includes(second[j]) === false) {
      Array.push(second[j]);
    }
  }
  return Array;
}

// loop within a loop. first loop iterates through each array. each parent iteration will search in child iteration if a match is found
// Lesson Learned: two sibling loops, not parent-child
