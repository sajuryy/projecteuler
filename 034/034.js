// Digit factorials
// Problem 34 
// 145 is a curious number, as 1! + 4! + 5! = 1 + 24 + 120 = 145.

// Find the sum of all numbers which are equal to the sum of the 
// factorial of their digits.

// Note: as 1! = 1 and 2! = 2 are not sums they are not included.

const factorials = [1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880];

function check(n) {
    let tmp = ("" + n).split("");
    let sum = 0;
    for (let i = 0; i < tmp.length; i++) {
        sum += factorials[tmp[i]];
    }
    if (n == sum) {
        return true
    } else {
        return false;
    }
}

function run() {
    let sum = 0;
    for (let i = 10; i < 10000000; i++) {
        if (check(i)) {
            sum += i;
        }
    }
    return sum;
}
console.log(run());
