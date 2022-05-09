const express = require('express');
const app = express();
app.listen(3000, () => console.log('Server is indeed listening'));

let nextId = 1;

const grades = {};

app.get('/api/grades', (req, res) => {
  const X = [];
  for (const obj in grades) {
    X.push(grades[obj]);
  }
  res.json(X);
});

app.use(express.json());

app.post('/api/grades', (req, res) => {
  const newGrade = {
    id: nextId
  };
  for (const property in req.body) {
    newGrade[property] = req.body[property];
  }
  grades[nextId] = newGrade;
  nextId++;
  res.status(201).json(newGrade);
});
