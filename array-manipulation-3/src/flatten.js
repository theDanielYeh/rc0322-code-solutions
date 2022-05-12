/* exported flatten */
function flatten(array) {
  var newArray = [];

  if (array[0].toString() !== '[object Object]') {
    for (var i = 0; i < array.length; i++) {
      if (typeof array[i] !== 'object') {

        newArray.push(array[i]);
      } else if (typeof array[i] === 'object') {
        for (var j = 0; j < array[i].length; j++) {
          newArray.push(array[i][j]);
        }
      }
    }
  } else { return array; }
  return newArray;
}

// a double for loop to extract each item in array argument
// review: needs to exclude objects that are not arrays. ended up using toString() to see what it displays
