// // this is just a demo file - not used
// // using callbacks
//
// function getTempCallback(location, callback){
//   callback(undefined, 78);
//   callback('City not found');
// }
//
// getTempCallback('Philadelphia', function(err, temp) {
//   if (err) {
//     console.log('error', err);
//   } else {
//     console.log('success', temp);
//   }
// });
//
// // using promises - only success or error can run, not both, and can't run twice
// function getTempPromise(location){
//   return new Promise(function(resolve, reject){
//     setTimeout(function() {
//       resolve(79);
//       reject('City not Found');
//     }, 1000);
//   });
// }
//
// // two different functions for error and success (reject/resolve)
// getTempPromise('Philadelphia').then(function(temp) {
//   console.log('promise success', temp);
// }, function(err) {
//   console.log('promise error', err);
// });

if (typeof 7 === 'number') {}

// should return the sum if the inputs are numbers
function addPromise(a,b){
  return new Promise(function(resolve,reject) {
    if (typeof a === 'number'&& typeof b === 'number') {
      resolve(a+b);
    }
    else {
      reject('Type mismatch');
    }
  });
}

addPromise(67,33).then(function(sum) {
  console.log('The sum is', sum)
}, function(err) {
  console.log('promise error', err);
});

addPromise(1,'a string').then(function(sum) {
  console.log('The sum is', sum)
}, function(err) {
  console.log('promise error:', err);
});
