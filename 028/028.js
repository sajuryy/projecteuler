// Number spiral diagonals
// Problem 28 

// Starting with the number 1 and moving to the right in a 
// clockwise direction a 5 by 5 spiral is formed as follows:

// 21 22 23 24 25
// 20  7  8  9 10
// 19  6  1  2 11
// 18  5  4  3 12
// 17 16 15 14 13

// It can be verified that the sum of the numbers on the diagonals
//  is 101.

// What is the sum of the numbers on the diagonals in a 1001 by 1001 spiral
// formed in the same way?

let arr = [];

// creates an empty array containing internal arrays with length n 
// -> got matrix n * n
function createEmptyArr(n) {
    for (let i = 0; i < n; i++) {
        let arrTmp = [];
        arrTmp.length = n;
        arr.push(arrTmp);
    }
}

// fills matrix with values in a clockwise direction starting from central 
// element (1, 2 ...... n*n)
function getArrValues(n) {
createEmptyArr(n);
    let a = (n - 1) / 2;
    let b = (n - 1) / 2;
    let x = 1;

    arr[a][b] = x;

    for (let t = 1; t < n; t++) {
        if (t % 2 == 0) {
            for (let i = 0; i < t; i++) {
                b -= 1;
                x += 1;
                arr[a][b] = x;
            };

            for (let i = 0; i < t; i++) {
                a -= 1;
                x += 1;
                arr[a][b] = x;
            };
        } else {
            for (let i = 0; i < t; i++) {
                b += 1;
                x += 1;
                arr[a][b] = x;
            };

            for (let i = 0; i < t; i++) {
                a += 1;
                x += 1;
                arr[a][b] = x;
            };
        }
    }

    for (let i = 1; i < n; i++) {
        arr[0][i] = arr[0][i - 1] + 1;
    }
}

function getDiagonalSum(n) {
    getArrValues(n);
    let sum = 0;
    let i = 0;
    let j = 0;
    while (i < arr.length) {
        sum += arr[i][j];
        i++;
        j++;
    }

    i = 0;
    j = arr.length - 1;
    while (i < arr.length) {
        sum += arr[i][j];
        i++;
        j--;
    }

    return sum - 1;
}

console.log(getDiagonalSum(1001));