// Skeleton

// FUNCTION DEFINITION(S)
function findLongestPalindrome(sentence) {
  // split sentence into words
  let arrayOfWords = sentence.split(" ");
  // iterate words and collect the palindromes
  let arrayOfPalindrome = [];
  
  for (let i = 0; i < arrayOfWords.length; i++){
    
    let currentWord = arrayOfWords[i];
    let palindromeCheck = isPalindrome(currentWord);
    if (palindromeCheck === true){
      arrayOfPalindrome.push(currentWord);
    }
  }
  
  // sort the list of palindromes by word length
  
  let sortedPalindrome = arrayOfPalindrome.sort(sortAscendingByLength);
  let longestPalindrome = sortedPalindrome.pop();
  return longestPalindrome;
  
  // return the largest item in the sorted list
}


function reverseString(string) {
  let individualLetters = string.toString().toLowerCase().split("");
  let lettersReversed = individualLetters.reverse();
  var reversedWordString = lettersReversed.join('');
  return reversedWordString;
}

function isPalindrome(word) {
  // hint: you can detect palindromes by comparing a string to its reverse
  let stringOfWord = word.toString().toLowerCase();
  if (stringOfWord === reverseString(word)){
    return true
  } else {
    return false
  }
}

function sortAscendingByLength(a, b) {
  if (a.length > b.length) {
    return 1;
  } else if (a.length < b.length) {
    return -1;
  }
  return 0;
}

// ASSERTION FUNCTION(S) TO BE USED
function assertFindLongestPalindrome (actual, expected, testName){
  if(actual === expected){
    console.log("Passed");
  } else {
    console.log("FAILED [" + testName + "]");
  }
}


// TESTS CASES
var stringWithTwoPalindrome = "The Madam drove her racecar through the finish line";
var outputOne = findLongestPalindrome(stringWithTwoPalindrome);
var assertFull = assertFindLongestPalindrome(outputOne, "racecar", "Find the Longest Palindrome")

console.log(outputOne);
console.log(assertFull);