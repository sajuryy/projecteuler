// Distinct powers
// Problem 29 
// Consider all integer combinations of ab for 2 ≤ a ≤ 5 and 2 ≤ b ≤ 5:

// 2^2=4, 2^3=8, 2^4=16, 25=32
// 3^2=9, 3^3=27, 3^4=81, 35=243
// 4^2=16, 4^3=64, 4^4=256, 4^5=1024
// 5^2=25, 5^3=125, 5^4=625, 5^5=3125
// If they are then placed in numerical order, with any repeats removed, 
// we get the following sequence of 15 distinct terms:

// 4, 8, 9, 16, 25, 27, 32, 64, 81, 125, 243, 256, 625, 1024, 3125

// How many distinct terms are in the sequence generated by ab for
//  2 ≤ a ≤ 100 and 2 ≤ b ≤ 100?


let arrPows = [];

// returns result in string
function getProd(x, y) {
    let a = x;
    let arrBasic = ("" + a).split("").reverse();
    let arr = [];
    let j = y;
    (function () {
        for (let i = 0; i < arrBasic.length; i++) {
            let tmp = 0;

            if (arr[i] || arr[i] == 0) {
                if (arr[i + 1] || arr[i + 1] == 0) {
                    tmp = +("" + arr[i + 1] + arr[i]) + arrBasic[i] * j;
                    arr.splice(i);
                } else {
                    tmp = arr[i] + arrBasic[i] * j;
                    arr.splice(i);
                }
            } else {
                tmp = arrBasic[i] * j;
            }
            let tmpArr = ("" + tmp).split('');
            for (let i = tmpArr.length - 1; i >= 0; i--) {
                arr.push(+tmpArr[i]);
            }
        }
    })();
    arrBasic = arr;
    return arrBasic.reverse().join('');
}

// getting pows for a^b, {a, min, max}, {b, min, max}
// returns array of strings
function getPows(min, max) {
    for (let a = min; a <= max; a++) {
        let current = a;
        for (let i = min; i <= max; i++) {
            let prod = getProd(current, a);
            arrPows.push(prod);
            current = prod;
        }
    }
}

// deletes same elements of array
function deleteSame(arr) {
    arrPows.sort();
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == arr[i + 1]) {
            arr.splice(i, 1);
            i--;
        }
    }
}

getPows(2, 100);

deleteSame(arrPows);

console.log(arrPows.length);