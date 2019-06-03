'use strict';

var promise = Promise.resolve('SECRET VALUE');

var promise = Promise.reject(new Error('SECRET VALUE'));


promise.then(null, function (err) {
  console.error('THERE IS AN ERROR!!!');
  console.error(err.message);
});

promise.catch(function (err) {
  console.error('THERE IS AN ERROR!!!');
  console.error(err.message);
});


