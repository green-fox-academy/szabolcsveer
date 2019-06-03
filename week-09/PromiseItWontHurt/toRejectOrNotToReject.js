'use strict';

let promise = new Promise(function(fulfill,reject){
  fulfill(console.log("I FIRED"))
  reject(new Error("I DID NOT FIRE"))
});


function onRejected(error){
  console.log(error.message)
}

promise.then(()=>{}, (error)=> onReject(error));
