/* exported includes */
function includes(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (i + 1 === array.length && array[i] !== value) {
      return false;
    } else if (array[i] === value) {
      return true;
    }
  }
  if (array.length === 0) {
    return false;
  }
}
// for loop checking down the indexes for the value. return false if empty or not present
