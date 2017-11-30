// Digit fifth powers
// Problem 30 
// Surprisingly there are only three numbers that can be written as the sum of fourth powers of their digits:
// 
// 1634 = 1^4 + 6^4 + 3^4 + 4^4
// 8208 = 8^4 + 2^4 + 0^4 + 8^4
// 9474 = 9^4 + 4^4 + 7^4 + 4^4
// As 1 = 1^4 is not a sum it is not included.
// 
// The sum of these numbers is 1634 + 8208 + 9474 = 19316.
// 
// Find the sum of all the numbers that can be written as the sum of fifth powers of their digits.

// max i can contain not more than 6 digits, because sum of fifth powers of digits the biggest 
// number with 7 digits contains only 6 digits, biggest number with 8 digits also contains 
// only 6 digits and so on

// max i = 999999;

function getSum() {
    let result = 0;
    for (let i = 2; i < 1000000; i++) {

        let arr = ("" + i).split("");

        let arrPows = arr.map(function (digit) {
            return Math.pow(+digit, 5);
        })

        let sum = "" + arrPows.reduce(function (c, s) {
            return c + s;
        })

        if (i == sum) {
            result += i;
        }
    }
    return result;
}

console.log(getSum());