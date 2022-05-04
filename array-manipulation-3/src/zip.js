/* exported zip */
function zip(first, second) {
  var bArray = [];
  if (first.length < second.length || first.length === second.length) {
    for (var i = 0; i < first.length; i++) {
      var sArray = [];
      sArray.push(first[i]);
      sArray.push(second[i]);
      bArray.push(sArray);
    }
    return bArray;
  } else if (second.length < first.length) {
    for (var j = 0; j < second.length; j++) {
      var sArray = [];
      sArray.push(first[j]);
      sArray.push(second[j]);
      bArray.push(sArray);
    }
    return bArray;
  }
}

// iterate through array indexes. whichever array has shorter length will become the condition in the for loop
// push from both arrays at same index into small array, then push into big array
// lesson learned: new array needs to be redeclared through each iteration to push as an array. otherwise, all will push as values
