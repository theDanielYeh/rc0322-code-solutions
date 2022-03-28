/* exported findIndex */
function findIndex(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i;
      // eslint-disable-next-line no-unreachable
      break;
    }
  }
  return -1;
}
