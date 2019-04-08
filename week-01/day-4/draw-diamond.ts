'use strict';

let lineCount: number = 7;
// let space: any = lineCount / 2;
// let star: any = "*";



// Write a program that draws a
// diamond like this:
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as lineCount is

for (let i = 0; i < lineCount; i++) {
    let empty: any = "";
    for (let j = 1; j < lineCount-i; j++) {
    empty = empty + " ";
    }
    for(let k = 1; k < (2*i-1); k++){
    empty = empty + "*";
    }
    console.log(empty);
}
if (lineCount%2 === 0){

}






export {}