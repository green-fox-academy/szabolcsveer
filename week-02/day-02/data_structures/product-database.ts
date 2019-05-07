'use strict';

let myProducts: any = {
  'eggs': 200,
  'milk': 200,
  'fish': 400,
  'apples': 150,
  'bread': 50,
  'chicken': 550

}

// How much is the fish?
let fishPrice = myProducts['fish']
console.log(fishPrice);

// What is the most expensive product?
let mostExpensive = Object.keys( myProducts ).map(function ( key ) { return myProducts[key]; });
console.log(Math.max(...mostExpensive));

// What is the average price?

let average =  Object.keys( myProducts ).map(function ( key ) { return myProducts[key]; });
console.log(average.reduce((a,v )=> (a + v) ) / average.length);

// How many products' price is below 300?
let below300 = Object.keys(myProducts).filter(e => {return myProducts[e] < 300})
console.log(below300.length);

// Is there anything we can buy for exactly 125?7

let only125 = Object.keys(myProducts).filter(e => {return myProducts[e] ===  125})
console.log(only125 !==  null ? 'there\'s nothing for 125' : 'got something for 125' );

// What is the cheapest product?
let cheapest = Object.keys( myProducts ).map(function ( key ) { return myProducts[key]; });
console.log(Math.min(...cheapest));