/*
Problem statement: Program that calculates the average roll of 
a D100 for ROLL_ITERATIONS crashes for 1000000000 iterations; please
fix.
*/
type DiceRoll = {
    diceValue: number;
  };
  
  const ROLL_ITERATIONS = 1000000000;
  
  function main() {

    let sum = 0;
  
    for (let iterator = 0; iterator < ROLL_ITERATIONS; iterator = iterator + 1) {
        
      const roll: DiceRoll = { diceValue: Math.round(Math.random() * 100) };
      sum += roll.diceValue;
    }   

    const average = sum / ROLL_ITERATIONS;
  
    console.log(`average dice roll value: ${average}`);
  }
  
  main();