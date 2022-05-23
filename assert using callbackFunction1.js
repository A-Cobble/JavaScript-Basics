// FUNCTION DEFINITION(S)
function every(array, callbackFunction) {
  var doesEveryElementMatch = true;

  for (var i = 0; i < array.length; i++) {
    doesEveryElementMatch = callbackFunction(array[i]);
  }

  return doesEveryElementMatch;
}

// ASSERTION FUNCTION(S) TO BE USED
function separateFunction(number) {
  if (number === number) {
    return true
  } else {
    return false
  }
}

function assertEqual(condition, testName) {
  if (condition) {
    console.log('passed')
  } else {
    console.log('FAILED [' + testName + ']')
  }
}
// TESTS CASES
var listofNumbers = [1, 2, 3, 4, 5]
var output = every(listofNumbers, separateFunction)
assertEqual(output === true, 'Should return a boolean value of true');