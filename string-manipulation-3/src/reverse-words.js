/* exported reverseWords */
function reverseWords(string) {
  var arrayA = string.split(' ');

  for (var j = 0; j < arrayA.length; j++) {
    arrayA[j] = reverseWord(arrayA[j]);
  }
  return arrayA.join(' ');
}

function reverseWord(word) {
  var newWord = '';
  for (var i = word.length - 1; i >= 0; i--) {
    newWord = newWord + word[i];
  }
  return newWord;
}

// copy over stringmanipulation1 reverse function and use it after converting string argument to array
