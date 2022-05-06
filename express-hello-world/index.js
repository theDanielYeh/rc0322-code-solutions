const express = require('express');

const app = express();

app.use(function (req, res) {
  // console.log('Time:', Date.now());
  // next();
  console.log(req.method);
  res.send('Hello World');
});

app.listen(3000, () => console.log('Server is indeed listening'));
