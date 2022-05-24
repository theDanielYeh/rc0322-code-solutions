var express = require('express');
var path = require('path');
var app = express();

const URL = path.join(__dirname,'public');
const static = express.static(URL)
app.use(static);


app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
  console.log(URL);
  console.log(static)
});
