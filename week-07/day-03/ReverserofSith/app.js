const express = require('express');
const app = express();
const port = 8080;
const path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/sith',(req,res) =>{
  // let sith_text = yodaText;
  let yodaText = [];
  let revText = [];
  yodaText.push(req.body.text.split(' '));

  for(let i=0;i< yodaText.length;i++){
    if(yodaText[i] % 2 !== 0){
      revText.push(yodaText[i];

    }
  }
  
  // if(req.body.text === 'sith'){
  //   }
  // }
  res.send({
    "sith_text": revText
  })
})




app.use(express.static('assets'));
app.listen(port, () => console.log(`Example app listening on port ${port}!`))