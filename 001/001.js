
// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.
// 1. []
// 2. sum

var arr = [];
function getArr(a) {
for (let i = 0; i < a ; i++){
  if ((i % 3 == 0) || (i % 5 == 0)) {
    arr.push(i);
  }
}
};


getArr(1000);

  let result = arr.reduce(function(sum, current) {
    return sum + current;
  }, 0);
console.log(result);
