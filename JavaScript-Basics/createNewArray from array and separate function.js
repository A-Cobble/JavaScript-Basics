function createNewArray(arr, func) {
  //Your pseudocode here
  
  //should return an Array
  //should run the input function on each element of the array and return the result in a new array
  //the result should not be hard coded, it should be dependent on the parrameters
  
  // input = an array (ex: [4, 5, 6, 7] ) and a function that subract 1 from each value of the initial array. Therefore each value of the input array will be the input for the function (ex: function subtractOnefromArray(value){}).
  // output = a new array (ex: [3, 4, 5, 6] )
  
  // A for loop can be used to iterate through the input array. 
  // As the for loop iterates through the array it will perform the specified operation on the current element before moving to the next element (in this case it output each value to a separate function. The subtractOnefromArray)
  // The subtractOnefromArray function takes the current value and subtracts 1 then returns the result to the initial function (function createNewArray).
  
  // line 24 defines a newArray
  // line 25-29 the for loop that iterates over input array 
  // line 27 sends the current iterated value to the specified function 
  // line 28 inserts the value returned by the specified function into the new Array
  // line 30 outputs the completed array
  // line 33-37 defines a separate function that will take an input number and subtract 1 then outputs the result
  
  //Your code here
  
var arrayMinusOne = [];
for (var i = 0; i < arr.length; i++) {
  var currentNum = arr[i];
  var runOnEach = func(currentNum);
  arrayMinusOne.push(runOnEach);
}
  return arrayMinusOne;
}

function subtractOnefromArray(currentNum) {

  var subtraction = currentNum - 1;
  return subtraction;
}


var arrayOfNumbers = [4, 5, 6, 7]
var output = createNewArray(arrayOfNumbers, subtractOnefromArray)
console.log(output)