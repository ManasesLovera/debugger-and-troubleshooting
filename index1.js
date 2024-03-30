"use strict";
/* Sorts array of numbers in descending order. */
function simpleInsertionSort(values) {
    if (values.length <= 1) {
        return values;
    }
    const result = [];
    values.forEach((value) => {
        if (result.length === 0) {
            result.push(value);
        }
        else {
            let insertionIndex = result.findIndex((resultValue) => resultValue < value);
            if (insertionIndex === -1) {
                insertionIndex = result.length;
            }
            result.splice(insertionIndex, 0, value);
        }
    });
    return result;
}
const sequence = [1, 2, 43, 4, 7, 6, 7, 13, 9, 10];
const sorted = simpleInsertionSort(sequence);
console.log(sorted);
//# sourceMappingURL=index1.js.map