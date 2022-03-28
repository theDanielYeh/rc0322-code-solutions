/* exported compact */
function compact(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (!!array[i] !== false) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
// assign an empty array to a new var
// create an elaborate for loop with complex if/else statements
// return newArray
// google search a method that converts each array value into a boolean equivalent ^_^
