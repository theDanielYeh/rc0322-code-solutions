/* exported getValues */
function getValues(object) {
  var newArray = [];
  for (var key in object) {
    newArray.push(object[key]);
  }
  return newArray;
}
// same as getKeys exercise, but get values
