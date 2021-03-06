'use strict';

import { log } from "util";

export{}

// Read all data from 'log.txt'.
// Each line represents a log message from a web server
// Write a function that returns an array with the unique IP adresses.
// Write a function that returns the GET / POST request ratio.
let fs = require('fs');

// fs.readLineSync('log.txt')

function returnIP(file){
  let new1 = fs.readFileSync(file,'utf-8');
  new1 = new1.replace(/[/\r]/g,'')
  console.log(new1);
  
  let splitByLines = new1.split('\n')
  let ip: any[] = []
  let arr: any[] = []
  
    let postAndGet: string [] = []
    for (let i: number = 0; i < splitByLines.length; i++) {
        arr.push(splitByLines[i].split('   '))
        ip.push(arr[i][1])
        postAndGet.push(arr[i][2])
      }
      console.log(arr);
      
      const uniqueIps = ip.filter((v, i, a) => a.indexOf(v) === i); 
      // console.log(uniqueIps);
      
      const getNum = postAndGet.filter(x => x === 'GET ').length
      const postNum = postAndGet.filter(x => x === 'POST ').length;
      
      console.log(getNum,postNum);
      
    
}



returnIP('log.txt')

// console.log(returnIP('log.txt'));