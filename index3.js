"use strict";
const ROLL_ITERATIONS = 1000000000;
function main() {
    let sum = 0;
    for (let iterator = 0; iterator < ROLL_ITERATIONS; iterator = iterator + 1) {
        const roll = { diceValue: Math.round(Math.random() * 100) };
        sum += roll.diceValue;
    }
    const average = sum / ROLL_ITERATIONS;
    console.log(`average dice roll value: ${average}`);
}
main();
//# sourceMappingURL=index3.js.map