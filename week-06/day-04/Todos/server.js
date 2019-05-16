'use strict';

const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  const todos = [
    'get up',
    'survive',
    'go back to bed',
  ];
  const h1 = 'Things to do today:'
  res.render('home', {things: h1,
    todo: todos} )
})




app.listen(port, () => console.log(`Example app listening on port ${port}!`))