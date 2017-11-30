// 1000-digit Fibonacci number
// Problem 25 
// The Fibonacci sequence is defined by the recurrence relation:

// Fn = Fn−1 + Fn−2, where F1 = 1 and F2 = 1.
// Hence the first 12 terms will be:

// F1 = 1
// F2 = 1
// F3 = 2
// F4 = 3
// F5 = 5
// F6 = 8
// F7 = 13
// F8 = 21
// F9 = 34
// F10 = 55
// F11 = 89
// F12 = 144
// The 12th term, F12, is the first term to contain three digits.

// What is the index of the first term in the Fibonacci sequence to contain 1000 digits?

function getSumBigValues(x, y) {

    let a = ("" + x).split('').reverse();
    let b = ("" + y).split('').reverse();
    let c = [];
    
    for (let i = 0; i < b.length; i++) {
        let tmp;
        while (a.length < b.length) {
                a.push("0");
        };
        while (a.length > b.length ) {
                b.push("0");
            };

        if (c[i] || c[i] ==0 ) {
            tmp = +c[i] + +a[i] + +b[i];
            c.pop();
        } else {
            tmp = +a[i] + +b[i];
        }
        if (tmp > 9) {
            let tmpArr = ("" + tmp).split('');
            c.push(+tmpArr[1]);
            c.push(+tmpArr[0]);
        } else {
            c.push("" + tmp);
        }
    }
    return result = c.reverse().join('');
}

function getFibLimit(limit) {
        let a = 1; // F1 
        let b = 1; // F2
        let c=[];
        let count = 2; // (sequence number F3) - 1, because we break before number contains 1000 digits
        while (c.length < limit) {
                c = getSumBigValues(a, b);
                a = b;
                b = c;
                count += 1;
            }
            return count;
        }
        console.log(getFibLimit(1000)); //4782