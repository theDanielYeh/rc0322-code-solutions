/* exported unique */
function unique(array) {
  var newArray = [];
  for (var i = array.length - 1; i >= 0; i--) {
    if (array.indexOf(array[i]) === i) {
      newArray.unshift(array[i]);
    }
  }
  return newArray;
}

// use an array method that would return something to show how many instances of an argument is present in the array
// lesson learned: such method doesn't exist. Instead, reverse iterate through array to compare index numbers
