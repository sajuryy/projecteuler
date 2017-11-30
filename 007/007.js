// By listing the first six prime numbers:
// 2, 3, 5, 7, 11, and 13, we can see that
// the 6th prime is 13.
//
// What is the 10 001st prime number?
// i % 1 == 0;
// i % i == 0;
// i % j != 0;
// j != i;


var arr = [];

function getPrime() {

  nextPrime: for (var i = 2; i <= 200000; i++) {

    for (var j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime;
    }

    arr.push(i);
  }
}

getPrime();

console.log(arr[10000]);
