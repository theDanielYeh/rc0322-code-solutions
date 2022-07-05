Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.

function findShort(s) {
    const newArray = s.split(' ');
    for (let i = 0; i < newArray.length; i++) {
      newArray[i] = newArray[i].length;
    }
    return Math.min(...newArray);
  }

function findShort(s) {
  return Math.min.apply(null, s.split(' ').map(w => w.length));
}
