/* exported capitalize */
function capitalize(word) {
  var a = word.toLowerCase();
  return word.charAt(0).toUpperCase() + a.slice(1);
}
// look for a function to capitalize first letter or index 0
// update: didnt read carefully - need to lowercase entire string first
