'use strict';

var lineCount: number = 4;

// Write a program that draws a
// pyramid like this:
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is



for (var index = 0; index < lineCount; index++) {
    var empty: any = "";
    for (var i = 1; i < lineCount-index; i++){
        empty = empty + " ";
    }
    for (var s = 1; s <= (2*index+1); s++) {
        empty = empty + '*';
      }
    
    console.log(empty);
}
  