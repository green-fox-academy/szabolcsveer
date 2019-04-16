'use strict';
export{}

// Write a function that copies the contents of a file into another
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful

const fs = require('fs');

function fileCopy(source,destination){
  let newfile = fs.readFileSync(source,'UTF-8')
  fs.writeFileSync(destination,newfile)
  return true;
}

console.log(fileCopy('my-file1.txt','mynewfile.txt'))

