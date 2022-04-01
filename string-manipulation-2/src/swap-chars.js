/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  var array = string.split('');
  var a = array[firstIndex];
  var b = array[secondIndex];
  array[firstIndex] = b;
  array[secondIndex] = a;
  return array.join('');

}
// replace()
// I was wrong. the current way is the way.
