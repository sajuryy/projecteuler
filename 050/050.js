// Consecutive prime sum
// Problem 50 
// The prime 41, can be written as the sum of six consecutive primes:

// 41 = 2 + 3 + 5 + 7 + 11 + 13
// This is the longest sum of consecutive primes that adds to a prime 
// below one-hundred.

// The longest sum of consecutive primes below one-thousand that adds 
// to a prime, contains 21 terms, and is equal to 953.

// Which prime, below one-million, can be written as the sum of the 
// most consecutive primes?
const lim = 1000000;

function isPrime(n) {
    for (let i = 2, s = Math.sqrt(n); i <= s; i++)
        if (n % i === 0) return false;
    return n !== 1;
};


function getArrPrimes(lim) {
    let arr = [];
    for (let i = 2; i < lim; i++) {
        if (isPrime(i)) {
            arr.push(i);
        }
    }
    return arr;
};


function run(lim) {
    let primes = getArrPrimes(lim);
    let maxSum = 0;
    let maxSeq = -1;
    for (let i = 0; i < primes.length; i++) {
        let sum = 0;
        for (let j = i; j < primes.length; j++) {
            sum += primes[j];
            if (sum > 1000000) {
                break;
            } else if (j - i > maxSeq && sum > maxSum && isPrime(sum)) {
                maxSum = sum;
                maxSeq = j-i;
            }
        }
    }
    return maxSum;
};

console.log(run(lim));