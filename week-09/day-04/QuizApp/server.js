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
app.get('/api/game',(req,res)=>{
  conn.query('SELECT questions.question FROM questions INNER JOIN answers ON questions.id =answers.question_id ORDER BY RAND() LIMIT 1;', function (err, rows) {
    if (err) {
      res.status(400).send(err.toString());
      return
    }
    res.json(rows);
  });
})
app.get('/api/questions', (req,res)=>{
});

// conn.query('SELECT * FROM questions;', function (err, rows) {
//   if (err) {
//     console.log(err.toString());
//   }
//   console.log('Data received from Db:\n');
//   console.log(rows);
// });

app.listen(port, ()=> console.log(`Server is listening on port: ${port}`));