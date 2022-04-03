/* exported isPalindromic */
function isPalindromic(string) {
  var $split = string.split(' ');
  var $unsplit = $split.join('');
  var newWord = '';
  for (var i = $unsplit.length - 1; i >= 0; i--) {
    newWord = newWord + $unsplit[i];
  }
  if ($unsplit === newWord) {
    return true;
  } else {
    return false;
  }
}
// reverse string function
