'use strict';

let myExpenses: number[] = [500, 1000, 1250, 175, 800 , 120];

// How much did we spend?

let iSpent = myExpenses.reduce((a,v )=> a + v);
console.log(iSpent);

// Which was our greatest expense?

console.log(Math.max(...myExpenses));

// Which was our cheapest spending?

console.log(Math.min(...myExpenses));


// What was the average amount of our spendings?

let average = myExpenses.reduce((a,v )=> (a + v) ) / myExpenses.length;
console.log(average);


export{}
