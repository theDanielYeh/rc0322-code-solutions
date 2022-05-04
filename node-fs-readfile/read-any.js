const fs = require('fs');

const X = process.argv[2];

fs.readFile('./' + X, 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
