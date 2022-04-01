/* exported ransomCase */
function ransomCase(string) {
  var newString = '';
  newString = string.toLowerCase();
  newString = newString.split('');
  for (var i = 1; i < newString.length; i += 2) {
    newString[i] = newString[i].toUpperCase();
  }
  newString = newString.toString();
  newString = newString.replaceAll(',', '');
  return newString;

  // for (var i = 0; i < string.length; i++) {
  //   newString = newString[i] + newString[i + 1].toUpperCase();
  // }
  // return newString;
}
// lowercase everything and then uppercase 2n
