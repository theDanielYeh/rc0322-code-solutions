// Check to see if a string has the same amount of 'x's and 'o's.The method must return a boolean and be case insensitive.The string can contain any char.

// Examples input / output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
  if (str.match(/x/gi) !== null && str.match(/o/gi) !== null) {
    return str.match(/x/gi).length === str.match(/o/gi).length
  } else {
    return str.match(/x/gi) === str.match(/o/gi);
  }
}

function XO(str) {
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
}
