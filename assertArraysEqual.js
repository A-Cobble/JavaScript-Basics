//var expected = ['b', 'r', 'o', 'k', 'e', 'n'];
//var actual = 'broken'.split('');
//assertArraysEqual(actual, expected, 'splits string into array of characters');
// console output:
// passed
// var expected = [1, 1, 2, 3, 5, 8, 13];
// var actual = generateFirstNFibonaccis(7);
// assertArraysEqual(actual, expected, 'generates first 7 Fibonacci numbers');
// console output:
// FAILED [generates first 7 Fibonacci numbers] Expected "1, 1, 2, 3, 5, 8, 13", but got "2, 3, 5, 8, 13, 21, 34"

function assertArraysEqual(actual, expected, testName) {

  
  var lengthOfActual = actual.length;
  var lengthOfExpected = expected.length
  if (lengthOfActual === lengthOfExpected) {
     lengthResult = true
  } else {
     lengthResult = false
  }

    
    for (var i = 0; i < expected.length; i++) {
        if (expected[i] === actual[i]) {
            iterationResult = true
        } else {
            iterationResult = false
        }
    }

 if (lengthResult === true && iterationResult === true) {
        console.log('passed')
    } else {
        console.log('FAILED [' + testName + '] Expected "' + expected.join(', ') + '", but got "' + actual.join(', ') + '"')
    }
}


var output = assertArraysEqual([1, 1, 2, 3, 5, 8, 13],[1, 1, 2, 3, 5, 8, 13], 'generates first 7 Fibonacci numbers')
console.log(output)

var output2 = assertArraysEqual([1, 1, 2, 8, 13],[1, 1, 2, 3, 5, 8, 13], 'generates first 7 Fibonacci numbers')
console.log(output2)