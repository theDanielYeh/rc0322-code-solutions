const fs = require('fs');

const express = require('express');

const app = express();
app.listen(3000, () => console.log('Server is indeed listening'));

const $data = require('./data.json');

app.get('/api/notes', (req, res) => {
  const X = [];
  for (const prop in $data.notes) {
    X.push($data.notes[prop]);
  }
  res.status(200).json(X);
});

app.get('/api/notes/:id', (req, res) => {
  if (req.params.id <= 0 || isNaN(req.params.id) === true) {
    res.status(400).json('Error: Please use positive integer');
  } else if ($data.notes[req.params.id]) {
    res.status(200).json($data.notes[req.params.id]);
  } else if (!$data.notes[req.params.id]) {
    res.status(404).json('Error: Entry does not exist.');
  }
});

app.use(express.json());

app.post('/api/notes', (req, res) => {
  if (!req.body.content) {
    res.status(400).json('Error: Content is a required field');
  } else if (req.body.content) {
    const newEntry = {
      id: $data.nextId,
      content: req.body.content
    };
    $data.notes[$data.nextId] = newEntry;
    fs.writeFile('data.json', JSON.stringify($data, null, 2), 'utf8', err => {
      if (err) throw err;
    });
    $data.nextId++;
    res.status(201).json(newEntry);
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
      if (err) console.log(err);
      res.status(500).json();
    });
    res.status(204).json();
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
      if (err) console.log(err);
      res.status(500).json();
    });
    res.status(200).json(updateEntry);
  }
});
