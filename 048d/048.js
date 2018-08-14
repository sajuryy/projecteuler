// The series, 1^1 + 2^2 + 3^3 + ... + 10^10 = 10405071317.

// Find the last ten digits of the series, 1^1 + 2^2 + 3^3 + ... + 1000^1000.





// function getSumBigValues(x, y) {

//     let a = ("" + x).split('').reverse();
//     let b = ("" + y).split('').reverse();
//     let c = [];

//     for (let i = 0; i < b.length; i++) {
//         let tmp;
//         while (a.length < b.length) {
//                 a.push("0");
//         };
//         while (a.length > b.length ) {
//                 b.push("0");
//             };

//         if (c[i] || c[i] ==0 ) {
//             tmp = +c[i] + +a[i] + +b[i];
//             c.pop();
//         } else {
//             tmp = +a[i] + +b[i];
//         }
//         if (tmp > 9) {
//             let tmpArr = ("" + tmp).split('');
//             c.push(+tmpArr[1]);
//             c.push(+tmpArr[0]);
//         } else {
//             c.push("" + tmp);
//         }
//     }
//     return result = c.reverse().join('');
// }




// let arrStart = (a) => {
//   let square = a*a;
//   let squareStr = square+'';
//   let squareArr = squareStr.split('').reverse();
//   return squareArr;
// };

// console.log(arrStart(8));




var arrBasic = [0, 0, 1];
function getArr() {
    for (let j = 3; j < 11; j++) {


        let arr = [];
        (function () {
            for (let i = 0; i < arrBasic.length; i++) {
                let tmp = 0;

                if (arr[i]) {
                    tmp = arr[i] + arrBasic[i] * 10;
                    arr.pop();
                } else {
                    tmp = arrBasic[i] * 10;
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
};

getArr();

console.log(arrBasic);