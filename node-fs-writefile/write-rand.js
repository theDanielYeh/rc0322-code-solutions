const fs = require('fs');

fs.writeFile('random.txt', Math.random().toString() + '\n', 'utf8', err => {
  if (err) throw err;
});

// const data = new Uint8Array(Buffer.from(Math.random()));

// fs.writeFile('random.txt', data, err => {
//   if (err) throw err;
//   console.log('The file has been saved!');
// });
