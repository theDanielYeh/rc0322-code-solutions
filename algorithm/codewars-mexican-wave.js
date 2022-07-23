// wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]

function wave(str) {
  let newArray = [];
  for (let i = 0; i < str.length; i++) {
    const upValue = str.slice(i, i + 1).toUpperCase();
    if (upValue !== ' ') {
      newArray.push(str.substring(0, i) + upValue + str.substring(i + 1));
    }
  }
  return newArray;
}

function wave(str) {
  let result = [];

  str.split("").forEach((char, index) => {
    if (/[a-z]/.test(char)) {
      result.push(str.slice(0, index) + char.toUpperCase() + str.slice(index + 1));
    }
  });

  return result;
}
