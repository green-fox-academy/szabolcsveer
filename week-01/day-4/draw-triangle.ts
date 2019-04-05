'use strict';

let lineCount: number = 4;

// Write a program that draws a triangle like this:
//
// *
// **
// ***
// ****
//
// The triangle should have as many lines as lineCount is



for (let index = 1; index <= lineCount; index++) {
    let triangle: any = "";
    for (let i = 1; i <= index; i++){
        triangle += "*"

    }
    console.log(triangle)
    
}