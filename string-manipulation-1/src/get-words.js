/* exported getWords */
function getWords(string) {
  if (!!string === true) {
    return string.split(' ');
  } else {
    return string.split('');
  }
  // var newArray = [];
  // newArray.push(string.split(' '));
  // return newArray;
}
// create an empty array. split the string based on spaces. push result into array
