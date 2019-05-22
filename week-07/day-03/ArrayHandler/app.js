const express = require('express');
const app = express();
const port = 8080;
const path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/arrays',(req,res) =>{
  if(req.body.what === 'sum'){
    let sum = 0;
    for(let i=0; i< req.body.numbers.length;i++){
      sum += req.body.numbers[i]
    }
    res.send({
      "result" : sum
    })

}else if(req.body.what === 'multiply'){
  let multiply = 1;
  for(let i=0; i< req.body.numbers.length;i++){
    multiply *= req.body.numbers[i]
  }
  res.send({
    "result" : multiply
  })

}
else if(req.body.what === 'double'){
  let double = 0;
  for(let i=0; i< req.body.numbers.length;i++){
    double += req.body.numbers[i] * 2
  }
  res.send({
    "result" : double
  })
}else{
  res.send({ "error": "Please provide what to do with the numbers!"})
}

})


app.use(express.static('assets'));
app.listen(port, () => console.log(`Example app listening on port ${port}!`))