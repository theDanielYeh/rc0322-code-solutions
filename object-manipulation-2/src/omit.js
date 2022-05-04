/* exported omit */
function omit(source, keys) {
  var newObject = {};
  for (var $property in source) {
    if (keys.includes($property) === false) {
      newObject[$property] = source[$property];
    }
  }
  return newObject;
}
// copy pick function//
