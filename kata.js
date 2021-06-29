// Calculate area of given triangle. Create a function t_area that will take a string which will represent triangle, find area of the triangle, one space will be equal to one length unit. The smallest triangle will have one length unit.

// .
// .      .  
// .      .       .      ---> should return 2.0

// .
// .      .  
// .      .       .     
// .      .       .      .      ---> should return 4.5

function tArea(tStr) {




    tStr = tStr.split('\n');
    // let spaces = tStr.substring(/ /g);

    const area = (((tStr[tStr.length - 2].length - 1) / 2) ** 2) / 2;
    console.log(tStr[tStr.length - 2]);

    return area;
}

console.log(tArea('\n.\n. .\n. . .\n. . . .\n. . . . .\n')); // Solved


// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.

// Examples

// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false

function generateHashtag(str) {
    const strArr = str.split(' ');

    if (str === '' || str.trim() === '') {
        return false;
    }
    // strArr.forEach(word => {
    //     console.log(word[0]);
    //     if (str && word) {

    //         word = word.replace(word[0], word[0].toUpperCase());
    //         total.push(word.trim());
    //     }
    // });

    const totalArr = strArr.map(word => {
        return word.trim() ? word.replace(word[0], word[0].toUpperCase()) : null;

    });

    if (totalArr.join('').length >= 140) {
        return false;
    }

    console.log('#' + totalArr.join(''));
    return ('#' + totalArr.join(''));

}

generateHashtag("    never walk alone");


// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

function count(string) {
    if (string) {

        const output = string.split('').reduce((acc, i) => {

            // if (acc[i]) {
            //     acc[i] += 1;
            // } else {
            //     acc[i] = 1;
            // }

            acc[i] = acc[i] ? acc[i] += 1 : 1;

            return acc;

        }, {});


        return output;

    }

    return {};
}

count("aba");

// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

function duplicateCount(text) {
    let count = 0;
    const output = text.toLowerCase().split('').reduce((acc, i) => {

        acc[i] = acc[i] ? acc[i] += 1 : 1;

        return acc;
    }, {});

    Object.values(output).forEach(val => {
        if (val > 1) {
            count++;
        }
    });

    return count;
}

duplicateCount("aabbcde");

// Two tortoises named A and B must run a race. A starts with an average speed of 720 feet per hour. Young B knows she runs faster than A, and furthermore has not finished her cabbage.

// When she starts, at last, she can see that A has a 70 feet lead but B's speed is 850 feet per hour. How long will it take B to catch A?

// More generally: given two speeds v1 (A's speed, integer > 0) and v2 (B's speed, integer > 0) and a lead g (integer > 0) how long will it take B to catch A?

// The result will be an array [hour, min, sec] which is the time needed in hours, minutes and seconds (round down to the nearest second) or a string in some languages.

// If v1 >= v2 then return nil, nothing, null, None or {-1, -1, -1} for C++, C, Go, Nim, Pascal,[] for Kotlin or "-1 -1 -1".

// Examples:
// (form of the result depends on the language)

// race(720, 850, 70) => [0, 32, 18] or "0 32 18"
// race(80, 91, 37)   => [3, 21, 49] or "3 21 49"


function race(v1, v2, g) {
    if (v1 >= v2) {
        return null;
    }

    let hours = Math.floor(g / (v2 - v1));
    let minutes = Math.floor((g / (v2 - v1) * 60) % 60);
    let seconds = Math.floor((g / (v2 - v1) * 3600) % 60);

    return [hours, minutes, seconds];

}

race(790, 820, 70);

// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(str) {

    const output = str.split(' ').map(word => {
        word = word.split('');
        let letter = word.shift();
        word.push(letter);
        return word.join('');

    });

    console.log(output.join('ay '));
    if (output[output.length - 1] != '!' &&
        output[output.length - 1] != '?' &&
        output[output.length - 1] != '.') {
        return output.join('ay ') + 'ay';

    } else {
        return output.join('ay ');
    }

}

pigIt('Pig latin is cool');


// Snail Sort
// Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.
const array = [[1, 2, 3],
               [8, 9, 4],
               [7, 6, 5]];

const array2 = [[1, 2, 3, 5],
               [8, 9, 4, 6],
               [7, 6, 5, 17]];

snail = function (array) {
    let n = array.length;
    console.log(...array);
    return [...array[0], ...array[1], ...array[2]];
};

snail(array);

