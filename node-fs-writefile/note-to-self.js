const fs = require('fs');

const X = process.argv[2];

fs.writeFile('note.txt', X + '\n', 'utf8', err => {
  if (err) throw err;
});
