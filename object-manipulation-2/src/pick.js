/* exported pick */
function pick(source, keys) {
  var newObject = {};
  for (var i = 0; i < keys.length; i++) {
    for (var $key in source) {
      if (keys[i] === $key && source[$key] !== undefined) {
        newObject[$key] = source[$key];
      }
    }
  }
  return newObject;
}
