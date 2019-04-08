'use strict';

// -  Create a variable named `ai` with the following content: `[3, 4, 5, 6, 7]`
// -  Log the sum of the elements in `ai` to the console

let ai: number[] = [3,4,5,6,7];
// let sum:number = 0;
// ai.forEach(function(item,index){
    
//     sum = sum + item
    
// })
// console.log(sum);

let sum: number = ai.reduce((total, elem) => total + elem, 0)

console.log(sum);

