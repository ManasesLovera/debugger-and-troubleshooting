"use strict";
function calculateLetterFrequency(input) {
    var _a;
    const frequencyMap = new Map();
    for (const letter of input) {
        if (frequencyMap.has(letter)) {
            let mapValue = (_a = frequencyMap.get(letter)) !== null && _a !== void 0 ? _a : 0;
            console.log(mapValue);
            frequencyMap.set(letter, mapValue + 1);
            console.log(frequencyMap);
        }
        else {
            frequencyMap.set(letter, 1);
            console.log(frequencyMap);
        }
    }
    return frequencyMap;
}
function printLetterFrequency(frequencyMap) {
    console.log("Letter Frequency:");
    for (const [letter, frequency] of frequencyMap) {
        console.log(`${letter}: ${frequency}`);
    }
}
const inputString = "Hello, World!";
const frequencyMap = calculateLetterFrequency(inputString);
printLetterFrequency(frequencyMap);
//# sourceMappingURL=index2.js.map