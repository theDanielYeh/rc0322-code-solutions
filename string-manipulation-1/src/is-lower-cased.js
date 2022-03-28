/* exported isLowerCased */
function isLowerCased(word) {
  if (word === word.toLowerCase()) {
    return true;
  } else {
    return false;
  }
}
// lesson learned from isUpperCase exercise: check if entire word is lowercase
// if so, return true, else false
