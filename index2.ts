function calculateLetterFrequency(input: string) {
    const frequencyMap = new Map<string, number>();
  
    for (const letter of input) {
      if (frequencyMap.has(letter)) {
        let mapValue = frequencyMap.get(letter) ?? 0;
        console.log(mapValue);
        frequencyMap.set(letter, mapValue+1);
        console.log(frequencyMap);
      } else {
        frequencyMap.set(letter, 1);
        console.log(frequencyMap);
      }
    }
  
    return frequencyMap;
  }
  
  function printLetterFrequency(frequencyMap: Map<string, number>) {
    console.log("Letter Frequency:");
  
    for (const [letter, frequency] of frequencyMap) {
      console.log(`${letter}: ${frequency}`);
    }
  }
  
  const inputString = "Hello, World!";
  const frequencyMap = calculateLetterFrequency(inputString);
  printLetterFrequency(frequencyMap);