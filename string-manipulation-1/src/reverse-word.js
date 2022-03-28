/* exported reverseWord */
function reverseWord(word) {
  var newWord = '';
  for (var i = word.length - 1; i >= 0; i--) {
    newWord = newWord + word[i];
  }
  return newWord;
}
// for loop countdown that pulls each character and concats them?
// update: was on the right track, could not figure out line 5 initially. googled correct code for line 5
