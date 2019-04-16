'use strict';
export{}

// Write a function that copies the contents of a file into another
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful

const fs = require('fs');

function fileCopy(soruce,destination){
  fs.copyFileSync(soruce,destination)
  return true
}

console.log(fileCopy('my-file.txt','newfile.txt'))

