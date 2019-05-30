const express = require('express')
const app = express()
const port = 5000;
const mysql = require('mysql');
const path = require('path');


app.use(express.json());
app.use('/static', express.static(path.join(__dirname, 'public')))

// app.get('/',function(req,res) {
//   res.sendFile(path.join(__dirname + '/index.html'));
// });

// app.get('/hello', (req, res) => res.send('Hello World!'));

let conn = mysql.createConnection({
  host: 'localhost',
  user: 'clairvoyant',
  password: 'password',
  database: 'reddit'
});

conn.connect(function (err) {
  if (err) {
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established');
});


app.get('/posts', (req, res) => {

  conn.query('SELECT * FROM posts;', function (err, rows) {
    if (err) {
      console.log(err.toString());
      res.status(500);
      return
    }
    res.status(200).json(rows);
  })
})

app.post('/posts', (req, res) => {
  conn.query(`INSERT INTO posts (title,url) VALUES ("${req.body.title}","${req.body.url}");`),
    function (err, rows) {
      if (err) {
        console.log(err.toString());
        res.status(500);
        return
      }
      res.status(200).json(rows);
    }

  conn.query('SELECT * FROM posts;', function (err, rows) {
    res.send(rows);
  });

});

app.put('/posts/:id/upvote', (req, res) => {
  // console.log(req.params);
  conn.query(`UPDATE posts SET score = score + 1 WHERE id = ${req.params.id}; `),
    function (err, rows) {
      if (err) {
        console.log(err.toString());
        res.status(500);
        return
      }
      res.status(200).json(rows);
    }
  conn.query('SELECT * FROM posts;', function (err, rows) {
    res.send(rows);
  });
});

app.put('/posts/:id/downvote', (req, res) => {
  // console.log(req.params);
  conn.query(`UPDATE posts SET score = score - 1 WHERE id = ${req.params.id}; `),
    function (err, rows) {
      if (err) {
        console.log(err.toString());
        res.status(500);
        return
      }
      res.status(200).json(rows);
    }
  conn.query('SELECT * FROM posts;', function (err, rows) {
    res.send(rows);
  });
});

//DELETE POST
app.delete('/posts/:id', (req, res) => {
  conn.query(`DELETE FROM posts WHERE id = ${req.params.id};`),
    function (err, rows) {
      if (err) {
        console.log(err.toString());
        res.status(500);
        return
      }
      res.status(200).json(rows);
    }

  conn.query('SELECT * FROM posts;', function (err, rows) {
    res.send(rows);
  });
})

//UPDATE DATA
app.put('/posts/:id', (req, res) => {
  conn.query(`UPDATE posts SET title = ?, url = ? WHERE id = ?;`, [req.body.title,req.body.url,req.params.id],
   function (err, rows) {
      if (err) {
        console.log(err.toString());
        res.status(500);
        return
      }
      res.status(200).json(rows);
    }
  )
});

//ADD USERS
app.post('/posts/:id', (req, res) => {
  conn.query(`INSERT INTO name (name) VALUES ("${req.body.name}")`), function (err, rows) {
    if (err) {
      console.log(err.toString());
      res.status(500);
      return
    }
    res.status(200).json(rows);
  }

})


//CHECK IN TERMINAL
conn.query('SELECT * FROM posts;', function (err, rows) {
  if (err) {
    console.log(err.toString());
  }
  console.log('Data received from Db:\n');
  console.log(rows);
});






app.listen(port, () => console.log(`Example app listening on port ${port}!`))