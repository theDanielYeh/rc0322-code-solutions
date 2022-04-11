/* exported isAnagram */
function isAnagram(firstString, secondString) {
  var arrayA = firstString.split('').sort().join('').trim();
  var arrayB = secondString.split('').sort().join('').trim();
  if (arrayA === arrayB) {
    return true;
  } else {
    return false;
  }
}
// find a way to standardize both string formats? i.e. an alphabetize method?
