
//
// The prime factors of 13195 are 5, 7, 13 and 29.
//
// What is the largest prime factor of the number 600851475143 ?


var a = 600851475143;
var factors = [];

function getFactors(a) {

  for (let i = 2; i < 1000000; i++) {
    if (a % i == 0) {
      factors.push(i);
      a = a / i;
    } //else return;
  }
}

getFactors(a);

console.log(factors);
