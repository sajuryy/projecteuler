// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

// Find the sum of all the primes below two million.

var arr = [];

for (var i = 2; i < 2000000; i++) {
  arr[i] = true
}

var p = 2;

do {
  for (i = 2 * p; i < 2000000; i += p) {
    arr[i] = false;
  }

    for (i = p + 1; i < 2000000; i++) {
    if (arr[i]) break;
  }

  p = i;
} while (p * p < 2000000);

var sum = 0;
for (i = 0; i < arr.length; i++) {
  if (arr[i]) {
    sum += i;
  }
}

console.log(sum);
