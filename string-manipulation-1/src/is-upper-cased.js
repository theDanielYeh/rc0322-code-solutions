/* exported isUpperCased */
function isUpperCased(word) {
  if (word === word.toUpperCase()) {
    return true;
  } else {
    return false;
  }
}
// for loop that checks each character to make sure it is uppercased
// if returns true, else returns false
// update: easier to just check if entire string is capitalized using string.toUpperCase()
