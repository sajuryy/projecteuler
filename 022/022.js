// Using names.txt (right click and 'Save Link/Target As...'), a 46K text 
// file containing over five-thousand first names, begin by sorting it into 
// alphabetical order. Then working out the alphabetical value for each name,
//  multiply this value by its alphabetical position in the list to obtain a name score.

// For example, when the list is sorted into alphabetical order, COLIN, 
// which is worth 3 + 15 + 12 + 9 + 14 = 53, is the 938th name in the list. So, COLIN would obtain a score of 938 × 53 = 49714.

// What is the total of all the name scores in the file?

const fs = require('fs')
const NAMES = fs.readFileSync('./p022_names.txt', { encoding: 'utf8' }).split(",").sort();
const ALPHABET = "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z".split(" ");

let sequenceNumbers = [];
(function creatSequenceNumbers(arr) {
    for (let i = 0; i < arr.length; i++) {
        sequenceNumbers.push(i + 1);
    }

})(NAMES);

let letterScore = [];
(function createLetterScore() {
    for (let i = 0; i < NAMES.length; i++) {
        let tmp = 0;
        let name = NAMES[i].split("");
        for (let j = 0; j < name.length; j++) {
            tmp += ALPHABET.indexOf(name[j]) + 1;
        }
        letterScore.push(tmp); 
    }
})();


function countScoresSum() {
    let scores = [];
    for (let i = 0; i < NAMES.length; i++) {
        scores.push(sequenceNumbers[i] * letterScore[i]);
    }
    return scores.reduce(function (c, s) {
        return c + s;
    })
};

console.log(countScoresSum());