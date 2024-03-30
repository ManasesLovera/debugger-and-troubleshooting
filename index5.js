"use strict";
/*
1. ESPECIFICACION
2. DISEÑO
3. EXPRESION
4. COMPORTAMIENTO DE AMBIENTE
CONTEXTO

*/
function findPrimeNumbers(count, startingValue = 0) {
    if (count <= 0)
        return [];
    const primeNumbers = [];
    let currentValue = startingValue;
    while (primeNumbers.length < count) {
        if (isPrime(currentValue)) {
            primeNumbers.push(currentValue);
        }
        currentValue += 1;
    }
    return primeNumbers;
}
function isPrime(number) {
    let result = true;
    for (let j = 2; j <= Math.sqrt(number); j++) {
        if (number === 0 || number === 1)
            result = false;
        if (number % j === 0) {
            //console.log(`${number}:${result}`);
            result = false;
        }
    }
    return result;
}
function printPrimeNumbers(numbers) {
    //console.log("Prime Numbers:");
    numbers.forEach((number) => {
        //console.log(number);
    });
}
const primeNumbers = findPrimeNumbers(20000, 0);
printPrimeNumbers(primeNumbers);
/*
-- Perfilador de Node

npx tsc
node --prof index5.js
echo >> output.txt
node --prof-process [FileNameJustCreated.log] > output.txt

WINDOWS ONLY
*/ 
//# sourceMappingURL=index5.js.map