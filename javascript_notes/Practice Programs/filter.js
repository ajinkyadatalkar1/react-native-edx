const arr = [1,2,3,4];
console.log("display greater than 2 and filter elements less than 2: " + arr.filter(function(x) {return x>2}));

function filter(arr, fn) {
  const newArr = []
  arr.forEach(val => {
    if (fn(val)) newArr.push(val)
  })

  return newArr
}

console.log("filter elements not divisible by 2: " + filter(arr, function(x) {return x%2==0}));
