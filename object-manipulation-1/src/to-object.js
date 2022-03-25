/* exported toObject */
function toObject(keyValuePair) {
  // var newObject = {};
  // newObject.push(keyValuePair[0]);
  // for (var key in newObject) {
  //   newObject.push(keyValuePair[1]);
  // }
  // return newObject;
  var newObject = {};
  newObject[keyValuePair[0]] = keyValuePair[1];
  return newObject;
}
// same getValue and getKey exercises, get both
// update: i was wrong. follow format of setValue exercise
