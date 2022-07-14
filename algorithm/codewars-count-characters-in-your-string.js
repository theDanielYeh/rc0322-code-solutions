// The main idea is to count all the occurring characters in a string.If you have a string like aba, then the result should be { 'a': 2, 'b': 1 }.

// What if the string is empty ? Then the result should be empty object literal, {}.

function count(string) {
  if (string == null) {
    return {};
  }
  let objectOne = {};
  const arrayOne = string.split('');
  for (let i = 0; i < arrayOne.length; i++) {
    if (objectOne[arrayOne[i]]) {
      objectOne[arrayOne[i]] += 1;
    } else {
      objectOne[arrayOne[i]] = 1;
    }
  }
  return objectOne;
}

function count(string) {
  var count = {};
  string.split('').forEach(function (s) {
    count[s] ? count[s]++ : count[s] = 1;
  });
  return count;
}
