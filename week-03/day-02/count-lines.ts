'use strict';
export{}

// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.

let fs = require('fs');

function numberOfLines(filename:string):number{
  try{
    return fs.readFileSync(filename, 'utf-8').split('\n').length;
  }
  catch(err){
    return 0;
  }
}

console.log(numberOfLines('my-fiiiile.txt'));