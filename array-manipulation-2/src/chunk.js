/* exported chunk */
function chunk(array, size) {
  var newArray = [];
  for (var i = 0; i < array.length; i += size) {
    newArray.push(array.slice(i, i + size));
  }
  return newArray;
}

// function chunk(array, size) {
//   var newArray = [];
//   var newSubArrayOne = [];
//   var newSubArrayTwo = [];
//   var counter = 0;
//   for (var i = counter; i < size; i++) {
//     newSubArrayOne.push(array[i]);
//     counter = i;
//   }
//   for (var j = counter + 1; j < counter + size + 1; j++) {
//     newSubArrayTwo.push(array[j]);
//   }
//   newArray.push(newSubArrayOne, newSubArrayTwo);
//   return newArray;
// }
// // use the % method for something. google search
// array.length % size;
