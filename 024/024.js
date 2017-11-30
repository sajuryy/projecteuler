// Lexicographic permutations
// Problem 24 
// A permutation is an ordered arrangement of objects. For example, 3124 
// is one possible permutation of the digits 1, 2, 3 and 4. If all of the
// permutations are listed numerically or alphabetically, we call it lexicographic 
// order. The lexicographic permutations of 0, 1 and 2 are:

// 012   021   102   120   201   210

// What is the millionth lexicographic permutation of the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9?

const DIGITS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; 

let permutations = [];
permutations.push(DIGITS);

function getLimitPermutation(arr, limit) {
    for (let i = 1; i < limit; i++) {
        nextPermutation(arr[i - 1]);
    }
    return permutations[permutations.length - 1].join("");
}

function nextPermutation(arr) {

    // looking for j: arr [j] <arr [j + 1];
    let j = arr.length - 2;
    (function () {
        jSearch: for (j; ; j--) {
            if (arr[j] < arr[j + 1] || j == 0) {
                return;
            } else {
                continue jSearch;
            }
        }
    })();

    // looking for l; arr [j] <arr [l];
    let l = arr.length - 1;
    (function () {
        lSearch: for (l; ; l--) {
            if (arr[j] < arr[l]) {
                return;
            } else {
                continue lSearch;
            }
        }
    })();

    // copy array in arrTmp, interchange values of j and l in copied array;
    let arrTmp = arr.slice();
    arrTmp[l] = arr[j];
    arrTmp[j] = arr[l];

    let k = j + 1;
    let m = arr.length - 1;

    // copy arrTmp in arrTmp1;
    // check if k < m ir true, if not, interchange values k and m, k set k+1, m set m-1;

    let arrTmp1 = arrTmp.slice();
    (function () {
        fin: for (; ;) {
            if (k >= m) {
                return;
            } else {
                arrTmp1[k] = arrTmp[m];
                arrTmp1[m] = arrTmp[k];
                m -= 1;
                k += 1;
                continue fin;
            }
        }
    })();
    permutations.push(arrTmp1);
}

console.log(getLimitPermutation(permutations, 1000000)); //2783915460
