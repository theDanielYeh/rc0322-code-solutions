const fs = require('fs');

const express = require('express');

const app = express();

const $data = require('./data.json');

app.get('/api/notes', (req, res) => {
  const array = [];
  for (const prop in $data.notes) {
    array.push($data.notes[prop]);
  }
  res.status(200).json(array);
});

app.get('/api/notes/:id', (req, res) => {
  if (req.params.id <= 0 || isNaN(req.params.id) === true) {
    res.status(400).json('Error: Please use positive integer');
  } else if ($data.notes[req.params.id]) {
    res.status(200).json($data.notes[req.params.id]);
  } else {
    res.status(404).json('Error: Entry does not exist.');
  }
});

app.use(express.json());

app.post('/api/notes', (req, res) => {
  if (!req.body.content) {
    res.status(400).json('Error: Content is a required field');
  } else {
    const newEntry = {
      id: $data.nextId,
      content: req.body.content
    };
    $data.notes[$data.nextId] = newEntry;
    $data.nextId++;
    fs.writeFile('data.json', JSON.stringify($data, null, 2), 'utf8', err => {
      if (err) throw err;
      else {
        res.status(201).json(newEntry);
      }
    });
  }
});

app.delete('/api/notes/:id', (req, res) => {
  if (req.params.id <= 0 || isNaN(req.params.id) === true || !req.params.id) {
    res.status(400).json('Error: Please use positive integer');
  } else if (!$data.notes[req.params.id]) {
    res.status(404).json('Error: Entry does not exist.');
  } else if ($data.notes[req.params.id]) {
    delete $data.notes[req.params.id];
    fs.writeFile('data.json', JSON.stringify($data, null, 2), 'utf8', err => {
      if (err) {
        console.log(err);
        res.status(500).json();
      } else {
        res.sendStatus(204);
      }
    });
  }
}
);

app.put('/api/notes/:id', (req, res) => {
  if (req.params.id <= 0 || isNaN(req.params.id) === true || !req.body.content) {
    res.status(400).json('Error: Valid ID and content must be specified.');
  } else if (!$data.notes[req.params.id]) {
    res.status(404).json('Error: Entry does not exist.');
  } else if ($data.notes[req.params.id]) {
    const updateEntry = {
      id: req.params.id,
      content: req.body.content
    };
    $data.notes[req.params.id] = updateEntry;
    fs.writeFile('data.json', JSON.stringify($data, null, 2), 'utf8', err => {
      if (err) {
        console.log(err);
        res.status(500).json();
      } else {
        res.status(200).json(updateEntry);
      }
    });
  }
});

app.listen(3000, () => console.log('Server is indeed listening'));
