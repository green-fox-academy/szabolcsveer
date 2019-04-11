'use strict';

/*Power 
Given base and n that are both 1 or more, compute recursively 
(no loops) the value of base to the n power, so powerN(3, 2) is 9 (3 squared). */

function powerN(base: number, n:number):number{
    if(n  < 1){
        return 1;
    }
    return  base * powerN(base,n - 1) ;

}

console.log(powerN(5,5));
console.log(Math.pow(5,5))