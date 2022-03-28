/* exported isVowel */
function isVowel(char) {
  if (char.toLowerCase() === 'a' || char.toLowerCase() === 'e' || char.toLowerCase() === 'i' || char.toLowerCase() === 'o' || char.toLowerCase() === 'u') {
    return true;
  } else {
    return false;
  }
}
// if statement to check if char = a,e,i,o,u
// update: code was ok, but forgot to have three equal signs instead of one
