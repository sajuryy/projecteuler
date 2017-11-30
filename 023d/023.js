// Non-abundant sums
// Problem 23
// A perfect number is a number for which the sum of its proper divisors is exactly equal to the number. 
// For example, the sum of the proper divisors of 28 would be 1 + 2 + 4 + 7 + 14 = 28, which means 
// that 28 is a perfect number.

// A number n is called deficient if the sum of its proper divisors is less than n and it is called 
// abundant if this sum exceeds n.

// As 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16, the smallest number that 
// can be written as the sum of two abundant numbers is 24. By mathematical analysis, it can be
//  shown that all integers greater than 28123 can be written as the sum of two abundant numbers. However,
//   this upper limit cannot be reduced any further by analysis even though it is known that the greatest 
//   number that cannot be expressed as the sum of two abundant numbers is less than this limit.

// Find the sum of all the positive integers which cannot be written as the sum of two abundant numbers.


const maxNonAbundantSums = 28124;
const minAbundantNumber = 12;

let abundantNumbers = []; // length 6965

function getAbundantNumbers(min, max, arr = abundantNumbers) {

    for (let j = min; j <= max; j++) {
        let arrTmp = [];
        for (let i = 1; i < j; i++) {
            if (j % i == 0) {
                arrTmp.push(i);
            }
        }

        if (j < arrTmp.reduce(function (c, s) {
            return c + s;
        }))
            arr.push(j);
    }
};

getAbundantNumbers(12, maxNonAbundantSums);
// console.log(abundantNumbers);
// getAbundantNumbers(minAbundantNumber, maxNonAbundantSums, abundantNumbers);


// arr = abundantNumbers
// max = maxNonAbundantSums + 1;

let sumsAbundantNumbers = []; // length 6961

function getSumsAbundantNumbers(arr, arrResult, max) {

    for (let i = 0; i < arr.length; i++) {
        gettingSums: for (let j = i; j < arr.length; j++) {
            let sum = arr[i] + arr[j];
            if (sum <= max) {
                arrResult.push(sum);
            } else {
                return arrResult;
            }
        }
    }
}

getSumsAbundantNumbers(abundantNumbers, sumsAbundantNumbers, maxNonAbundantSums);
console.log(sumsAbundantNumbers);

function getSumNonAbundantNumbers(arr, max) {
    // let result = 0;
    let arrRes = []; //21161 length
    let j = 0;
    for (let i = 1; i < max; i++) {
        if (i !== arr[j]) {
            arrRes.push(i)
            // result += i;
        } else {
            j += 1;
        }
    }

    console.log(arrRes.length);
    console.log(arrRes[arrRes.length - 1]);
    console.log(arrRes[arrRes.length - 2]);
    return arrRes.reduce(function (c, s) {
        return c + s;
    })
    // return result;
}

//297604909

console.log(getSumNonAbundantNumbers(sumsAbundantNumbers, maxNonAbundantSums));