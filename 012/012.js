// The sequence of triangle numbers is generated by adding the natural numbers. So the 7th triangle 
// number would be 1 + 2 + 3 + 4 + 5 + 6 + 7 = 28. The first ten terms would be:

// 1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ...

// Let us list the factors of the first seven triangle numbers:

//  1: 1
//  3: 1,3
//  6: 1,2,3,6
// 10: 1,2,5,10
// 15: 1,3,5,15
// 21: 1,3,7,21
// 28: 1,2,4,7,14,28
// We can see that 28 is the first triangle number to have over five divisors.

// What is the value of the first triangle number to have over five hundred divisors?

var triangle = [];

function getTriangle() {
  let num = 0;
  for (let i = 0; i < 20000; i++) {
    num += i + 1;
    triangle.push(num);
  }
}

getTriangle();



var value = 0;

function getValue() {
  for (let i = 10000; i < triangle.length; i++) {
    let inarr = [];
    for (let j = 0; j <= triangle[i]; j++) {
      if (triangle[i] % j == 0) {
        inarr.push(j);
      }
    }
    // console.log(inarr);
    if (inarr.length > 500) {
      return triangle[i];
    }
  }
}

// getValue();
console.log(getValue());





