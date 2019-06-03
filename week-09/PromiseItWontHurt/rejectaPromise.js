var promise = new Promise(function (fulfill, reject) {
  setTimeout(() => reject(new Error("REJECTED!")), 300);
});

function onReject (error) {
  console.log(error.message);
}
promise.then(undefined, (error)=> onReject(error));

// Your solution here