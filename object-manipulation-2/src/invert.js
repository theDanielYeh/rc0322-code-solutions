/* exported invert */
function invert(source) {
  var newObject = {};
  for (var $key in source) {
    newObject[source[$key]] = $key;
  }
  return newObject;
}

// create new object. need to play around with this one...
// Lesson Learned: don't forget that the variable in for loop iterates through all properties!
