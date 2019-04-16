'use strict';

// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0



let n;
function divider(n:any): any{
  let result = n/10;
  return result;
}
try {
  divider(n);
  if( n == 0 ){
    
  }
  throw Error('Fail');
}
catch(e){
  console.log(e.message);
}
console.log(divider(0));
