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

function repeated(what, howMany) {
    return what.repeat(howMany);
  }

if (lineCount % 2 === 1) {
    const halfLineCount = Math.floor(lineCount / 2);
    const spacer = ' ';
    const star = '*';
  
    // upper section
    for (let i = halfLineCount; i > 0; i--) {
      console.log(
        repeated(spacer, i),
        repeated(star, lineCount - 2 * i),
        repeated(spacer, i),
      );
    }
  
    // middle line
    console.log(
      repeated(star, lineCount),
    );
  
    // lower section
    for (let i = 1; i < halfLineCount + 1; i++) {
      console.log(
        repeated(spacer, i),
        repeated(star, lineCount - 2 * i),
        repeated(spacer, i),
      );
    }}