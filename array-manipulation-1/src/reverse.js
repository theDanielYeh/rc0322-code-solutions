/* exported reverse */
function reverse(array) {
  var newArray = [];
  for (var i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  return newArray;
}
// create a new array variable
// use for loop to push values into newArray. set i = array.length
// return newArray
