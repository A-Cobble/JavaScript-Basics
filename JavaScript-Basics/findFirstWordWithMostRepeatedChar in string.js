// Skeleton

// FUNCTION DEFINITION(S)
function findMaxRepeatCountInWord(word) {
  // Break up individual words into individual letters.
  // Count the instances of each letter
  // Iterate all the counts and find the highest
  // Return this word's max repeat count

  let stringOfWords = word.toString().split("");
  let letterCount = {};
  
  for (let i = 0; i < stringOfWords.length; i++) {
    let currentLetter = stringOfWords[i];  
    if (letterCount[currentLetter] === undefined) {
      letterCount[currentLetter] = 1;
    } else {
      letterCount[currentLetter]++;
    }
  }
  
  let countOfEachLetter = Object.values(letterCount);
  let maxNumber = Math.max(...countOfEachLetter);
  
  return maxNumber;
}

function findFirstWordWithMostRepeatedChars(text) {
  var maxRepeatCountOverall = 0;
  var wordWithMaxRepeatCount = '';

  // Break up input text into words (space-delimited).
  // For each word...
  
  let wordWithHighestCount = [];
  let arrayOfWords = text.toLowerCase().split(' ');
  
  for (let i = 0; i < arrayOfWords.length; i++) {
    let word = [];
    word.push(arrayOfWords[i]);
    var repeatCountForWord = findMaxRepeatCountInWord(word)
    
    // If that max repeat count is higher than the overall max repeat count, then
    // update maxRepeatCountOverall
    // update wordWithMaxRepeatCount
    
    if (repeatCountForWord > maxRepeatCountOverall){
      maxRepeatCountOverall = repeatCountForWord;
      wordWithMaxRepeatCount = word.toString();
    }
  }

  return maxRepeatCountOverall + " " + wordWithMaxRepeatCount;
}

// ASSERTION FUNCTION(S) TO BE USED
function assertMaxRepeat(actual, expected, testName) {
  if(actual === expected){
    console.log("Passed");
  } else {
    console.log("FAILED [" + testName + "]");
  }
}
// TESTS CASES
let testOne = "This is my test Case number one";
let testTwo = "a bb ccc dddd eeeee ffff ggg hh iopiopiopiopiopi";
let output1 = findFirstWordWithMostRepeatedChars(testOne);
let output2 = findFirstWordWithMostRepeatedChars(testTwo);

let assertOutput1 = assertMaxRepeat(output1, '2 test', "Find the first word with the most repeated characters in a line of text"); 
//this test shows the Passed result

let assertOutput2 = assertMaxRepeat(output2, '6 iopiopiopiopiopio', "Find the first word with the most repeated characters in a line of text");
//used iopiopiopiopiopio to show the Fail result.

console.log(output1);
console.log(assertOutput1);
console.log(output2);
console.log(assertOutput2);