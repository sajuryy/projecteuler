// n! means n × (n − 1) × ... × 3 × 2 × 1

// For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
// and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.

// Find the sum of the digits in the number 100!

let arrBasic = [0, 0, 9, 9];

(function getArr() {
    for (let j = 98; j > 0; j--) {

        let arr = [];
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
 
                if (tmp > 9 && tmp < 100) {
                    let tmpArr = ("" + tmp).split('');
                    arr.push(+tmpArr[1]);
                    arr.push(+tmpArr[0]);

                } else if (tmp >= 100) {
                    let tmpArr = ("" + tmp).split('');

                    arr.push(+tmpArr[2]);
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

let result = arrBasic.reduce(function (s, c) {
    return s + c;
})

console.log(result);