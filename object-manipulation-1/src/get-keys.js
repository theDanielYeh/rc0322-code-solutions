/* exported getKeys */
function getKeys(object) {
  var newArray = [];
  for (var key in object) {
    newArray.push(key);
  }
  return newArray;
}
// for loops to push keys at different indexes
