'use strict';

const es6Promise = require('es6-promise');

var promise = new Promise(function (fulfill, reject) {
  setTimeout(()=> fulfill('FULFILLED!'), 300)
});
promise.then(x => {console.log(x)});


// Your solution here