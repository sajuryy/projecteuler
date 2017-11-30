// Digit cancelling fractions
// Problem 33 
// The fraction 49/98 is a curious fraction, as an inexperienced mathematician in 
// attempting to simplify it may incorrectly believe that 49/98 = 4/8, which is correct, 
// is obtained by cancelling the 9s.

// We shall consider fractions like, 30/50 = 3/5, to be trivial examples.

// There are exactly four non-trivial examples of this type of fraction, less than one 
// in value, and containing two digits in the numerator and denominator.

// If the product of these four fractions is given in its lowest common terms, find 
// the value of the denominator.

function check(numerator, denominator) {
    let arrNumerator = ("" + numerator).split("");
    let arrDenominator = ("" + denominator).split("");
    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 2; j++) {
            if (+arrNumerator[1] == 0 && arrDenominator[1] == 0) {
                return false;
            }
            if (+arrNumerator[i] == +arrDenominator[j]) {
                arrNumerator.splice(i, 1);
                arrDenominator.splice(j, 1);
            }
            if (numerator / arrNumerator == denominator / arrDenominator) {
                return arrNumerator + arrDenominator;
            }
        }
    }
    return false;
}

function run() {
    let str = "";
    for (let i = 11; i < 100; i++) {
        for (let j = 10; j < i; j++) {
            if (check(j, i)) {
                str += check(j, i);
            }
        }
    }
    let arr = str.split("");
    let numers = [];
    let denoms = [];

    for (let i = 0; i < arr.length;) {
        numers.push(arr[i]);
        i += 2;
    }
    for (let i = 1; i < arr.length;) {
        denoms.push(arr[i]);
        i += 2;
    }

    for (let i = 0; i < denoms.length; i++) {
        for (let j = 0; j < numers.length; j++) {
            if (+denoms[i] % +numers[j] == 0) {
                denoms[i] /= numers[j];
                numers[j] = 1;
            }
        }
    }
    let denominatorProd = denoms.reduce((c, s) => {
        return c * s;
    })
    return denominatorProd;
}
console.log(run());
