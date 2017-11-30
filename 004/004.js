// A palindromic number reads the same both ways. The largest
// palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
//
// Find the largest palindrome made from the product of two 3-digit numbers.

// var arr = [];

// function getPals() {
//   for (let i = 1000; i >= 100; i--) {
//     for (let j = 1000; j >= 100; j--) {

//       let res = i * j;
//       let resArr = String(res).split('');

//       let resStr = resArr.join('');
//       let resStr1 = resArr.reverse().join('');


//       if (resStr === resStr1) {
//         arr.push(res);
//       }

//     }
//   }
// }

// getPals();

// function getMax(arr) {
//   let max = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// }

// console.log(getMax(arr));


// console.log((function () {
//     function isPal(n) {
//         return ("" + n) === ("" + n).split("").reverse().join("");
//     }

//     const upper = 999;
//     const lower = 100;
//     let i = upper;
//     let mul;

//     while (i > lower) {
//         let j = i;
//         while (j > lower) {
//             mul = j * i;
//             if (isPal(mul)) return { mul, i, j };
//             j--;
//         }
//         i--;
//     }
//     return mul;
// })());



function isPal(n) {
    return ("" + n) === ("" + n).split("").reverse().join("");
}

function maxPal() {
    var max = 0;
    for (let i = 999; i > 99; i--) {
        for (let j = i; j > 99; j--) {
            let product = i * j;
            if (isPal(product)) {
                if (product > max) {
                    max = product;
                }
            }
        }
    }
    return max
}


console.log(maxPal());


// function isPal(n) {
//     return ("" + n) === ("" + n).split("").reverse().join("");
// }

// function maxPal() {
//     var max = 0;
//     for (let i = 999; i > 99; i--) {
//         for (let j = 999; j > 99; j--) {
//             if (isPal(i * j) > max) {
//                 max = i * j;
//             }
//         }
//     }
//     return max
// }


// console.log(maxPal());