const fs = require('fs');
const express = require('express');
const app = express();
app.use(express.json());
const pg = require('pg');

// only create ONE pool for your whole server
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

app.get('/api/grades', (req, res, next) => {
  const sql = `
    select *
    from "grades"
    `;
  db.query(sql, [])
    .then(result => {
      res.status(200).json(result.rows);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.post('/api/grades', (req, res, next) => {
  const { score, name, course } = req.body;
  if (!name) {
    return res.status(400).json('Error: Name is a required field');
  } else if (!course) {
    return res.status(400).json('Error: Course is a required field');
  } else if (!score || score < 0 || score > 100) {
    return res.status(400).json('Error: Score is a required field and must be 0-100');
  }

  const sql = `
    insert into "grades" ("name", course, score)
    values ($3, $1, $2)
    returning *
  `;
  console.log(req.params);
  db.query(sql, [course, name, score])
    .then(result => {
      res.status(201).json(result.rows[0]);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.put('/api/grades/:gradeId', (req, res, next) => {
  const studentId = Number(req.params.gradeId);
  const { name, course, score } = req.body;
  if (!name) {
    return res.status(400).json('Error: Name is a required field');
  } else if (!course) {
    return res.status(400).json('Error: Course is a required field');
  } else if (!score || score < 0 || score > 100) {
    return res.status(400).json('Error: Score is a required field and must be 0-100');
  } else if (!studentId || !Number.isInteger(studentId) || studentId <= 0 || isNaN(studentId)) {
    return res.status(400).json('Error: Grade ID is a required field and must be a positive integer');
  }

  const sql = `
    update "grades"
    set "name" = $1,
    "course" = $2,
    "score" = $3
    where "gradeId" = $4
    returning *
  `;
  db.query(sql, [name, course, score, studentId])
    .then(result => {
      if (!result.rows[0]) {
        res.status(404).json('Error Grade ID does not exist.');
      } else {
        res.status(200).json(result.rows[0]);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.delete('/api/grades/:gradeId', (req, res, next) => {
  const studentId = Number(req.params.gradeId);
  if (!studentId || !Number.isInteger(studentId) || studentId <= 0 || isNaN(studentId)) {
    return res.status(400).json('Error: Grade ID is a required field and must be a positive integer');
  }

  const sql = `
    delete from "grades"
    where "gradeId" = $1
    returning *
  `;
  db.query(sql, [studentId])
    .then(result => {
      if (!result.rows[0]) {
        res.status(404).json('Error Grade ID does not exist.');
      } else {
        res.status(204).json(result.rows[0]);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.listen(3000, () => console.log('Server is indeed listening'));
