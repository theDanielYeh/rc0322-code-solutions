/* exported drop */
function drop(array, count) {
  var newArray = [];
  if (array.length > 0) {
    for (var i = count; i < array.length; i++) {
      newArray.push(array[i]);
    }

  } else {
    return newArray;
  }
  return newArray;
}
// declare newArray. for loop with i = count
