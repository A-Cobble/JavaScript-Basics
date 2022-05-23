// Skeleton

// FUNCTION DEFINITION(S)
function average(numbers) {

  var lengthOfNumbers = numbers.length
  var averageOfNumbers = sum(numbers) / lengthOfNumbers;
  return averageOfNumbers
  // uses sum function
  // returns the average of an array of numbers
}

function sum(numbers) {

  var sumOfNumbers = numbers.reduce((previousValue, currentValue) => previousValue + currentValue);

  return sumOfNumbers
  // returns the sum of an array of numbers
}

// ASSERTION FUNCTION(S) TO BE USED
function assertResults(result, testName) {
  if (result) {
    console.log('Passed');
  } else {
    console.log('FAILED [' + testName + ']')
  }
}

// TESTS CASES
var array1 = [1, 2, 3, 4, 5]
var output1 = sum(array1);
assertResults(output1 === 15, "Find sum of all elements in the array");
var output2 = average(array1);
assertResults(output2 === 3, "Find sum of all elements in the array");
console.log(output1);
console.log(output2);