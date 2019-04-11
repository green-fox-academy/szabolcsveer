'use strict';

// Bunnies
// We have a number of bunnies and each bunny has two big floppy ears. 
// We want to compute the total
// number of ears across all the bunnies recursively (without loops or multiplication).

function Bunnies(bunny: number): number{
    if (bunny <= 1){
        return bunny * 2
    }
    return 2 + Bunnies(bunny - 1);

}

console.log(Bunnies(5));