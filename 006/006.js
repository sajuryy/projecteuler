// The sum of the squares of the first ten natural numbers is,
// 12 + 22 + ... + 102 = 385
//
// The square of the sum of the first ten natural numbers is,
// (1 + 2 + ... + 10)2 = 552 = 3025
//
// Hence the difference between the sum of the squares of the first ten
// natural numbers and the square of the sum is 3025 − 385 = 2640.
//
// Find the difference between the sum of the squares of the first one
// hundred natural numbers and the square of the sum.


var squares =[];

function getSquares() {
  for (let i = 1; i <= 100; i++) {
    squares.push(i*i);
  }
}
getSquares();

var arr = [];

function getArr() {
for (let i = 1; i <= 100; i++) {
  arr.push(i);
}
}
getArr();

let squaresSum = squares.reduce(function(sum, cur) {
  return sum + cur;
})

let arrSum = arr.reduce(function(sum, cur) {
  return sum + cur;
})

let result = arrSum*arrSum - squaresSum;


console.log(result);
