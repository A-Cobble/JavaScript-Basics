// Skeleton

// FUNCTION DEFINITION(S)
function isIsogram(text) {
  // add each char to a set
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
  // note: a set drops dup values
  // thus, to see if all the chars were unique,
  // check length of text and the size of the set

  let SetOfText = new Set(text.toLowerCase());
  if (SetOfText.size === text.length) {
    return true;
  } else {
    return false;
  }
}

// ASSERTION FUNCTION(S) TO BE USED
function assertTextIsIsogram(actual, testName) {
  if (actual) {
    console.log('Passed');
  } else {
    console.log("FAILED [" + testName + "]");
  }
}

// TESTS CASES
let length = "length";
let outputLength = isIsogram(length);
let outputAssertLength = assertTextIsIsogram(outputLength, "Check if the text is an Isogram");
console.log(outputLength);
console.log(outputAssertLength);

let book = "book";
let outputBook = isIsogram(book);
let outputAssertBook = assertTextIsIsogram(outputBook, "Check if the text is an Isogram");
console.log(outputBook);
console.log(outputAssertBook);