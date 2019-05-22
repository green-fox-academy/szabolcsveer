const express = require('express');
const app = express();
const port = 8080;
const path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
// app.use(
//   bodyParser.urlencoded({
//     extended: true
//   })
// );

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});



app.get('/doubling',(req,res) =>{
  if(req.query.input){
    res.send({
          "received": req.query.input,
        "result": (req.query.input) * 2
    })
  }else if(!req.query.input)
  {res.send({
    "error": "Please provide an input!"
  })
}
});

app.get('/greeter', (req,res)=>{
  if(req.query.name && req.query.title){
    res.send({
      "welcome_message": `Oh, hi there ${req.query.name}, my dear ${req.query.title}!`
    })
  }
  else {
    res.send({
      "error": "Please provide a name and title"
    })
  }
});

app.get('/appenda/:appended',(req,res)=>{
  if(req.params){
    res.send({
      "appended": req.params.appended + "a"
    })}
  else if(req.params.appended === undefined){
    res.send(404);
  }
})

app.post('/dountil/:action',(req,res) =>{
  if(req.params.action === 'sum'){
    let sum = 0;
    for(let i=0; i<= req.body.until;i++){
      sum += i;
    }
    res.send({
      "result" : sum
    })
  }else if(req.params.action === 'factor'){
    let factor = 1;
    for(let j=1; j<=req.body.until;j++){
      factor *= j;
    }
    res.send({
      "result" : factor
    })

  }else if(req.body.until === undefined){
    res.send({
      "error": "Please provide a number!"
    })
  }
  


})


app.use(express.static('assets'));
app.listen(port, () => console.log(`Example app listening on port ${port}!`))