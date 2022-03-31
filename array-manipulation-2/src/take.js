/* exported take */
function take(array, count) {
  var newArray = [];
  if (array.length > 0) {
    for (var i = 0; i < count; i++) {
      newArray.push(array[i]);
    }
  } else {
    return newArray;
  }
  return newArray;
}
// shift values out of array and into new. let n = count
// return new array
// update: need to set array.length > 0 to address empty arrays
