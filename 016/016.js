// 215 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

// What is the sum of the digits of the number 21000?


// var Big = require('./lib/big.js-master/big.js');


// var a = new Big(2).pow(1000);

// var result = a.c.reduce(function (s, c) {
//     return s + c;
// })

// console.log(a.c);


var arrBasic = [6, 1];
(function getArr() {
    for (let j = 5; j < 1001; j++) {


        let arr = [];
        (function() {
            for (let i = 0; i < arrBasic.length; i++) {
                let tmp = 0;
                
                if (arr[i]) {
                    tmp = arr[i] + arrBasic[i] * 2;
                    arr.pop();
                } else {
                    tmp = arrBasic[i] * 2;
                }


                if (tmp > 9) {
                    let tmpArr = ("" + tmp).split('');
                    arr.push(+tmpArr[1]);
                    arr.push(+tmpArr[0]);

                } else {
                    arr.push(tmp);
                }
            }
        })();
        arrBasic = arr;
    }
})();

let result = arrBasic.reduce(function(s, c) {
    return s + c;
})

console.log(result);