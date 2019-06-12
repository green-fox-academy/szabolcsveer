const express = require('express');
const app = express();
const port = 3000;
const mysql = require('mysql');
const path = require('path');

app.use(express.urlencoded({
  extended: true
})) // for parsing application/x-www-form-urlencoded
app.use(express.json());
app.use(express.static('public'));

//CREATE DB CONNECTION
let conn = mysql.createConnection({
  host: 'localhost',
  user: 'clairvoyant',
  password: 'password',
  database: 'quizapp'
});

// CONNECTION RESPONSE
conn.connect(function (err) {
  if (err) {
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established');
});

app.get('/game', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/game.html'));
});

app.get('/questions', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/questions.html'));
});
//This endpoint should return a random question with its answers.
app.get('/api/game', (req, res) => {
  let ID = req.body.id;

  conn.query('SELECT id FROM questions ', function (err, data) {
    if (err) {
      res.status(400).send(err.toString());
      return
    }
    res.json(data[Math.floor(Math.random() * (data.length - 1) + 1)].id);
  });
});
//This endpoint should return all the questions. 
app.get('/api/questions', (req, res) => {
  conn.query(`SELECT * FROM answers;`, (err, rows) => {
    if (err) {
      res.status(400).send(err.toString());
      return
    }
    res.json(rows);
  });
});

app.post('/api/questions', (req, res) => {
  let id = req.body.id;
  let q = req.body.question;
  // console.log(req.body.answers);
  let answer1 = req.body.answers[0];
  let answer2 = req.body.answers[1];
  let answer3 = req.body.answers[2];
  let answer4 = req.body.answers[3];
  let is_correct = req.body.is_correct;
  console.log(answer1,answer2,answer3,answer4);
  console.log(req.body.question_id);
  conn.query(`INSERT INTO questions (question) VALUES (?)`, [q], (err, data) => {
    if (err) {
      res.status(400).send('Database 1');
    }
    // res.send();
  });
  conn.query(`SELECT id FROM questions WHERE question = ?`, [q], (err,data)=>{
    if (err) {
      console.log(err.toString());
      res.status(500).send('Database error');
      return
    }

  });
  conn.query(`INSERT INTO answers (answer.question_id,answer.answer_1,answer.answer_2,answer.answer_3,answer.answer_4,is_correct) VALUES(?,?,?,?,?,?)`, [id,answer1,answer2,answer3,answer4,is_correct], (err, data) => {
   if (err) {
      res.status(400).send('Database 2');
    }
    res.send({question: req.body.question, id: question_id});
  });
});

app.delete('/api/questions/id', (req, res) => {

});

// conn.query('SELECT * FROM questions;', function (err, rows) {
//   if (err) {
//     console.log(err.toString());
//   }
//   console.log('Data received from Db:\n');
//   console.log(rows);
// });

app.listen(port, () => console.log(`Server is listening on port: ${port}`));