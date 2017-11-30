// Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, 
// there are exactly 6 routes to the bottom right corner.


// How many such routes are there through a 20×20 grid?
let arr0 = [];

(function() {
    for (let i = 0; i < 21; i++) {
        arr0.push(1);
    }     
})();

var arr1 = [1];

(function() {
    for (let i = 1; i < 21; i++) {
        arr1.push(arr0[i] + arr1[i-1]);
    }  

})();

var arr2 = [1];

(function() {
    for (let i = 1; i < 21; i++) {
        arr2.push(arr1[i] + arr2[i-1]);
    }  

})();

var arr3 = [1];

(function() {
    for (let i = 1; i < 21; i++) {
        arr3.push(arr2[i] + arr3[i-1]);
    }  

})();

var arr4 = [1];

(function() {
    for (let i = 1; i < 21; i++) {
        arr4.push(arr3[i] + arr4[i-1]);
    }  

})();

var arr5 = [1];

(function() {
    for (let i = 1; i < 21; i++) {
        arr5.push(arr4[i] + arr5[i-1]);
    }  

})();

var arr6 = [1];

(function() {
    for (let i = 1; i < 21; i++) {
        arr6.push(arr5[i] + arr6[i-1]);
    }  

})();

var arr7 = [1];

(function() {
    for (let i = 1; i < 21; i++) {
        arr7.push(arr6[i] + arr7[i-1]);
    }  

})();

var arr8 = [1];

(function() {
    for (let i = 1; i < 21; i++) {
        arr8.push(arr7[i] + arr8[i-1]);
    }  

})();

var arr9 = [1];

(function() {
    for (let i = 1; i < 21; i++) {
        arr9.push(arr8[i] + arr9[i-1]);
    }  

})();

var arr10 = [1];

(function() {
    for (let i = 1; i < 21; i++) {
        arr10.push(arr9[i] + arr10[i-1]);
    }  

})();

var arr11 = [1];

(function() {
    for (let i = 1; i < 21; i++) {
        arr11.push(arr10[i] + arr11[i-1]);
    }  

})();

var arr12 = [1];

(function() {
    for (let i = 1; i < 21; i++) {
        arr12.push(arr11[i] + arr12[i-1]);
    }  

})();

var arr13 = [1];

(function() {
    for (let i = 1; i < 21; i++) {
        arr13.push(arr12[i] + arr13[i-1]);
    }  

})();

var arr14 = [1];

(function() {
    for (let i = 1; i < 21; i++) {
        arr14.push(arr13[i] + arr14[i-1]);
    }  

})();

var arr15 = [1];

(function() {
    for (let i = 1; i < 21; i++) {
        arr15.push(arr14[i] + arr15[i-1]);
    }  

})();
console.log(arr3);

var arr16 = [1];

(function() {
    for (let i = 1; i < 21; i++) {
        arr16.push(arr15[i] + arr16[i-1]);
    }  

})();

var arr17 = [1];

(function() {
    for (let i = 1; i < 21; i++) {
        arr17.push(arr16[i] + arr17[i-1]);
    }  

})();

var arr18 = [1];

(function() {
    for (let i = 1; i < 21; i++) {
        arr18.push(arr17[i] + arr18[i-1]);
    }  

})();

var arr19 = [1];

(function() {
    for (let i = 1; i < 21; i++) {
        arr19.push(arr18[i] + arr19[i-1]);
    }  

})();

var arr20 = [1];

(function() {
    for (let i = 1; i < 21; i++) {
        arr20.push(arr19[i] + arr20[i-1]);
    }  

})();

console.log(arr20);


