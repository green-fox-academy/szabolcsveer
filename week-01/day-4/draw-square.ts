'use strict';

let lineCount: number = 6;

// Write a program that draws a square like this:
//
// %%%%%%
// %    %
// %    %
// %    %
// %    %
// %%%%%%
//
// The square should have as many lines as lineCount is


let symbol: any = "%";

for(let i = 1; i <=lineCount; i++){
   if(i==1 || i == lineCount){
    console.log(symbol.repeat(lineCount))
   }else{
       console.log(symbol + " ".repeat(lineCount -2) + symbol)
   }
    
}





export{}
