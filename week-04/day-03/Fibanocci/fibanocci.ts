'use strict';

import * as test from "tape";


var fibonacci_series = function (n) 
{
  if (n===1) 
  {
    return [0, 1];
  } 
  else 
  {
    var s = fibonacci_series(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }
};

 console.log(fibonacci_series(8));
 
test('TestForFibo',(t) =>{
    const FiboSeq = fibonacci_series
    t.equal(FiboSeq,fibonacci_series(10));
    t.end();
})