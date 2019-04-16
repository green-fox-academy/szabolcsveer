'use strict';

// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0



let n;
function divider(n:any): any{
try {
  if( n == 0 ){
    throw Error('Fail');
  }else{
    return n/10;
  }
}
catch(e){
console.log(e.message);
}}
console.log(divider(0));
