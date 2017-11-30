// The following iterative sequence is defined for the set of positive integers:

// n → n/2 (n is even)
// n → 3n + 1 (n is odd)

// Using the rule above and starting with 13, we generate the following sequence:

// 13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
// It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

// Which starting number, under one million, produces the longest chain?

// NOTE: Once the chain starts the terms are allowed to go above one million.

// 


var arrLengths = [];

function getArrLengths() {

    for (let i = 1; i < 1000000; i++) {
        var sequence = [];
        function createSequence(n) {

            sequence.push(n);
            if (n == 1) {
                return sequence;
            }

            else if ((n % 2) == 0) {
                n = n / 2;
            }

            else if ((n % 2) != 0) {
                n = 3 * n + 1;
            }
            createSequence(n);
        }

        createSequence(i);

        arrLengths.push(sequence.length);
    }


}
getArrLengths();

var max = 0;
function getMax(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
}
getMax(arrLengths);

console.log(arrLengths.indexOf(max) + 1);