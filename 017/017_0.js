let arr1 = ("one, two, three, four, five, six, seven, eight, nine").split(", ");
let arr2 = ("ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen").split(", ");
let arr3 = ("twenty, thirty, forty, fifty, sixty, seventy, eighty, ninety").split(", ");
let arr4 = ("and, hundred, thousand").split(", ");

arr1 = arr1.map(function (element) {
    return element.length;
});
arr2 = arr2.map(function (element) {
    return element.length;
});
arr3 = arr3.map(function (element) {
    return element.length;
});
arr4 = arr4.map(function (element) {
    return element.length;
});

let arr5 = []; // lengths of 21-29, 31-39 .... 91-99

(function getArr5() {
    for (let i = 0; i < arr3.length; i++) {
        for (let j = 0; j < arr1.length; j++) {
            arr5.push(arr3[i] + arr1[j]);
        }
    }
})();

let arr6 = [...arr1, ...arr2, ...arr3, ...arr5]; // 1 - 99 incl

let arr7 = []; // lengths 101-199 .... 901-999

(function getArr7() {
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr6.length; j++) {
            arr7.push(arr1[i] + arr4[1] + arr4[0] + arr6[j]);
        }
    }
})()

let arr8 = []; // lengths 100, 200, ...900
(function getArr8() {
    for (let i = 0; i < arr1.length; i++) {
        arr8.push(arr1[i] + arr4[1]);
    }
})();

let arrTotal = [...arr6, ...arr7, ...arr8]; 
arrTotal.push(arr1[1] + arr4[2]); // lengths 1 -1000 incl



let result = arrTotal.reduce(function (s, c) {
    return s + c;
})

console.log(result);