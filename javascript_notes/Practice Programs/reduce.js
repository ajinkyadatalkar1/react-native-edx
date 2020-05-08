const arr = [1,2,3,4];
console.log(arr.reduce(function(x,y) {return x+y}));

// implementation of reduce method in javascript

function reduce(arr, fn, initialVal) {
  let returnVal = initialVal

  arr.forEach(val => {
    returnVal = fn(returnVal, val)
  })

  return returnVal
}
