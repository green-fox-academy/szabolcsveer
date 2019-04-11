'use strict';

// Strings
// Given a string, compute recursively (no loops)
//  a new string where all the lowercase 'x' chars have been changed to 'y' chars.

let string: string = 'xxxxxXXXXxxxXXXXX';


function toY(str: string): string{
    if(str.indexOf('x') === -1){ // base case
    return str;
    }
    str = str.replace('x','y');
    return toY(str);
}

console.log(toY(string));

