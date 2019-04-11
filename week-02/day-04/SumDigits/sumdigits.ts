'use strict';

/* Sum Digits 
Given a non-negative int n, return the sum of its digits recursively (no loops).
Note that mod (%) by 10 yields the rightmost digit (126 % 10 is 6),
while divide (/) by 10 removes the rightmost digit (126 / 10 is 12). */

function sumDigits(n:number):number{
    if (n < 10){
        return n;
    }   
    // let a = n%10;
    // let b = n - n%10;
    // let c = a + b/10;
    return sumDigits((n-n%10)/10 ) + n%10;
}

console.log(sumDigits(3333));


