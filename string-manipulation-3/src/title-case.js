/* exported titleCase */
function titleCase(title) {
  var arrayA = title.toLowerCase().split(' ');
  for (var i = 0; i < arrayA.length; i++) {
    if (arrayA[i] === 'javascript') {
      arrayA[i] = 'JavaScript';
    } else if (arrayA[i] === 'javascript:') {
      arrayA[i] = 'JavaScript:';
    } else if (arrayA[i] === 'api') {
      arrayA[i] = 'API';
    } else if (i === 0) {
      arrayA[i] = capFirst(arrayA[i]);
    } else if (i !== 0) {
      if (arrayA[i] !== 'and' && arrayA[i] !== 'or' && arrayA[i] !== 'nor' && arrayA[i] !== 'but' && arrayA[i] !== 'a' && arrayA[i] !== 'and' && arrayA[i] !== 'the' && arrayA[i] !== 'as' && arrayA[i] !== 'at' && arrayA[i] !== 'by' && arrayA[i] !== 'for' && arrayA[i] !== 'in' && arrayA[i] !== 'of' && arrayA[i] !== 'on' && arrayA[i] !== 'per' && arrayA[i] !== 'to') {
        arrayA[i] = capFirst(arrayA[i]);
        if (!!arrayA[i].match('-') === true) {
          arrayA[i] = arrayA[i].slice(0, arrayA[i].indexOf('-')) + '-' + arrayA[i][arrayA[i].indexOf('-') + 1].toUpperCase() + arrayA[i].slice(arrayA[i].indexOf('-') + 2, arrayA[i].length);
        }
      } else if (arrayA[i - 1][arrayA[i - 1].length - 1] === ':') {
        arrayA[i] = capFirst(arrayA[i]);
      }
    }
  }
  return arrayA.join(' ');
}

function capFirst(word) {
  return word[0].toUpperCase() + word.slice(1);
}
// convert to array
// capitalize first letter if condition is met
// capitalize API
// always return as JavaScript for JS words
// convert back to String and return
