// Euler discovered the remarkable quadratic formula:

// n ^ 2 + n + 41

// It turns out that the formula will produce 40 primes for the 
// consecutive integer values 0≤n≤39. 
// However, when n= 40, 40^2 + 40 + 41=40(40 + 1) + 41 is divisible by 41,
// and certainly when n= 41, 41^2 + 41 + 41 is clearly divisible by 41.

// The incredible formula n^2−79n+ 1601 was discovered, which produces 80 primes
//  for the consecutive values 0≤n≤79. The product of the coefficients,
//   −79 and 1601, is −126479.

// Considering quadratics of the form:

// n^2 + an + b, where | a |<1000 and | b |≤1000

// where | n | is the modulus/ absolute value of n
// e.g. |11|=11 and |−4 |= 4 
// Find the product of the coefficients, a and b, for the quadratic expression that 
// produces the maximum number of primes for consecutive values of nn, 
// starting with n= 0.


function isPrime(value) {
    for (var i = 2; i < value; i++) {
        if (value % i === 0) {
            return false;
        }
    }
    return value > 1;
}

// counts primes sequence length for consecutive n
function countLength(a, b) {
    let count = 0;
    for (let n = 0; ; n++) {
        let value = n * n + a * n + b;
        if (isPrime(value)) {
            count += 1;
        } else return count;
    }
}

// gets product of coefficients a, b in quadratic expression with biggest length
function getProduct() {
    let a;
    let b;
    let maxLength = 0;
    for (let i = -999; i < 1000; i++) {
        for (let j = -1000; j <= 1000; j++) {
            let length = countLength(i, j)
            if (length > maxLength) {
                a = i;
                b = j;
                maxLength = length;
            }
        }
    }
    return a * b;
}

console.log(getProduct());