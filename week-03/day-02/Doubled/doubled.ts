'use strict';

// Create a method that decrypts duplicated-chars.txt

const fs = require('fs');
let duplicatedText = fs.readFileSync('duplicated-chars.txt','utf-8').split('\n')
// console.log(duplicatedText)
function decryptDoubles(duplicatedText){
  let decrypted = '';
  for(let i = 0 ; i < duplicatedText.length; i++){
    for(let j = 0 ; j < duplicatedText[i].length; j+=2){
    decrypted += duplicatedText[i][j]
    decrypted += '\n' 
  }

return decrypted
}
}
console.log(decryptDoubles(duplicatedText))












export{}
