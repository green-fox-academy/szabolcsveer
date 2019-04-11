'use strict';

// Greatest Common Divisor
// Find the greatest common divisor of two numbers using recursion.

function divisor(n,z){
    if(z === 0){
        return n;
    }
    return divisor(z, n % z);

}

console.log(divisor(15,5));

