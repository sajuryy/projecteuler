// Pandigital products
// Problem 32 
// We shall say that an n-digit number is pandigital if it makes use of all 
// the digits 1 to n exactly once; for example, the 5-digit number, 15234, 
// is 1 through 5 pandigital.

// The product 7254 is unusual, as the identity, 39 × 186 = 7254, containing 
// multiplicand, multiplier, and product is 1 through 9 pandigital.

// Find the sum of all products whose multiplicand/multiplier/product identity 
// can be written as a 1 through 9 pandigital.

// HINT: Some products can be obtained in more than one way so be sure to only 
// include it once in your sum.

function getSum() {
    let sum = 0;
    for (let i = 1000; i < 10000; i++) {
        if (checkFactorsAndProd(i)) {
            sum += i;
        }
    }
    return sum;
}

function checkFactorsAndProd(n) {
    for (let i = 1; i <= n; i++) {
        if (n % i == 0 && isPandigital("" + i + n / i + n)) {
            return true;
        }
    }
    return false;
}

function isPandigital(str) {
    if (str.length != 9) {
        return false;
    }
    let tmp = str.split("").sort();
    for (let i = 0; i < 9; i++) {
        if (tmp[i] != i + 1) {
            return false;
        }
    }
    return true;
}


console.log(getSum());