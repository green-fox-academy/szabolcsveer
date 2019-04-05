'use strict';

// Write a program that calculates the sum and the average from 1 to a given number.
// Example input: 5
// Example output: Sum: 15, Average: 3

let input: number = 5;
let Sum: number = 0;
for (var index = 1; index <= input; index++) {
    Sum += index
    
}
console.log("Sum: " + Sum);
console.log("Average: " + (Sum/input));
