'use strict';

// Write a function called `sum` that returns the sum of numbers from zero to the given parameter



let addedNums: number = 3;




function sum(addedNums: number): number{
    let result: number = 0;
    for (let index = 0; index <= addedNums; index++) {
    result += index;
    }
    return result
}

console.log(sum(addedNums))