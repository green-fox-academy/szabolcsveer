'use strict';

//  Create a function that takes a list of numbers as a parameter
//  Returns a list of numbers where every number in the list occurs only once


let arr = [1, 11, 34, 11, 52, 61, 1, 34];

function unique(arr) {
    return arr.reduce((uniqueArray, number) => {
        if (uniqueArray.indexOf(number) === -1 ){
          uniqueArray.push(number);
        }
        return uniqueArray;
      }, []);

}
console.log(unique(arr));

//  Example
// console.log(unique([1, 11, 34, 11, 52, 61, 1, 34]))
//  should print: `[1, 11, 34, 52, 61]`