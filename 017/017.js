// If the numbers 1 to 5 are written out in words: one, two, three, four, 
// five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.

// If all the numbers from 1 to 1000 (one thousand) inclusive were written
//  out in words, how many letters would be used?


// NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) contains 23 letters and 115 
// (one hundred and fifteen) contains 20 letters. The use of "and" when writing out numbers is in compliance with British usage.


let arr1 = ("one, two, three, four, five, six, seven, eight, nine").split(", ");
let arr2 = ("ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen").split(", ");
let arr3 = ("twenty, thirty, forty, fifty, sixty, seventy, eighty, ninety").split(", ");
let arr4 = ("and, hundred, thousand").split(", ");


let arr5 = []; // 21-29, 31-39 .... 91-99

(function getArr5() {
    for (let i = 0; i < arr3.length; i++) {
        for (let j = 0; j < arr1.length; j++) {
            arr5.push(arr3[i] + arr1[j]);
        }
    }
})();


let arr6 = [...arr1, ...arr2, ...arr3, ...arr5]; // 1-99 incl

let arr7 = []; //101-199 .... 901-999

(function getArr7() {
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr6.length; j++) {
            arr7.push(arr1[i] + arr4[1] + arr4[0] + arr6[j]);
        }
    }
})();

let arr8 = []; // 100, 200, ...900
(function getArr8() {
    for (let i = 0; i < arr1.length; i++) {
        arr8.push(arr1[i] + arr4[1]);
    }
})();

let arrTotal = [...arr6, ...arr7, ...arr8];
arrTotal.push(arr1[1] + arr4[2]);
console.log(arrTotal.length);

let totalLength = arrTotal.map(function (element) {
    return element.length;
})

let result = totalLength.reduce(function(s, c) {
    return s + c;
})

console.log(result);