'use strict';
export{}

// Read all data from 'log.txt'.
// Each line represents a log message from a web server
// Write a function that returns an array with the unique IP adresses.
// Write a function that returns the GET / POST request ratio.
let fs = require('fs');

// fs.readLineSync('log.txt')

function returnIP(file){
  let new1 = fs.readLineSync(file);
  let newArr = new1.split(' ')
  console.log(newArr);  
}



// console.log(returnIP('log.txt'));