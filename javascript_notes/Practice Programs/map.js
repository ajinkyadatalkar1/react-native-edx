const arr = [1,2,3,4];
console.log("array using arr.map: " + arr.map(function(x){ return x+1}));
const arr2 = arr.map(function(x){return x*2});
console.log("copies arr2 from arr.map: " + arr2);


function map(arr, fn) {
  const newArr = []

  arr.forEach(function(val) {
    newArr.push(fn(val))
  })

  return newArr
}

function addOne(num) { return num + 1 }

const x = [0,1,2,3]

console.log("Custom map function: " + map(x, addOne))
