'use strict';

const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  let name =req.query.name 
  if(req.query.name === undefined){
    name = 'Guest'
  }
  let welcomeMsg = {greeting:`Welcome back ${name}!`};
  res.render('home', welcomeMsg)
})




app.listen(port, () => console.log(`Example app listening on port ${port}!`))