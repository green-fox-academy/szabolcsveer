'use strict';

// -  Create a function called `factorio`
//    that returns it's input's factorial

let num: number = 5;

function factorio(num: number): number {
    let fact: number = 1;
    for( let i = 1; i<= num; i++){
        fact = fact * i;
    }
   return fact;
}

console.log(factorio(num));

