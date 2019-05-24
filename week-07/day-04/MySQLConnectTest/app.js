const express = require('express');
const app = express();
const port = 3000; 
const  mysql = require('mysql');
const path = require('path');

app.use(express.json());
app.use('/static',express.static('static'));

let conn = mysql.createConnection ({
  host: 'localhost',
  user: 'clairvoyant',
  password: 'password',
  database: 'bookinfo'
});
conn.connect(function (err) {
  if (err) {
    console.log('Error connecting to Db');
    return;
    }
    console.log('Connection established');
  });
  
  app.get('/',function(req,res) {
    res.sendFile(path.join(__dirname + '/index.html'));
  });
  
  // SELECT book_mast.book_name,
  //   -> author.aut_name,
  //   -> category.cate_descrip,
  //   -> publisher.pub_name,
  //   -> book_mast.book_price
  //   -> FROM book_mast
  //   -> INNER JOIN author


  app.get('/books', function(req, res) {
    conn.query('SELECT book_mast.book_name, author.aut_name,category.cate_descrip,publisher.pub_name,book_mast.book_price FROM book_mast INNER JOIN author ON author.aut_id = book_mast.aut_id INNER JOIN category ON category.cate_id=book_mast.cate_id INNER JOIN publisher ON publisher.pub_id=book_mast.pub_id; ', function(err, rows) {
      if (err) {
        console.log(err.toString());
        res.status(500).send('Database error');
        return;
      }
      res.send(rows); 
    });
  });
  
  conn.query('SELECT * FROM book_mast;', function(err, rows) {
    if (err) {
      console.log(err.toString());
    }
    
    console.log('Data received from Db:\n');
    console.log(rows);
  });
  
  // conn.end()
  
  
app.listen(port, () => console.log(`Example app listening on port ${port}!`))