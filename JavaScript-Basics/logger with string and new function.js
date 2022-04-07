function logger(func, str) {
  //Your psuedocode here
  
  //should return a string
  //should run the input function on each letter and the result of each time the input function runs should be added to a new string
  //the result should not be hard coded, it should be dependent on the parameters
  
  //input = a string (ex: 'WELCOME!') and a function function that separates each letter and puts an ! mark after each letter  (function addExclamationPoint(variable) {}) 
  //output = a string (ex: 'W!E!L!C!O!M!E!!!')
  //may have to use conversions from string to array or vice versa.

  // A loop can be used to iterate through the string. Each element will have a specified function performed on it before the loop moves on to the next element. In this case it will be sent to a specified function.
  // A separate function will be defined so as to add an exclamation mark to each element from the original function. 
  // The result of the separate function will be returned to the original function where all elements will be combined producing an output (ex: 'W!E!L!C!O!M!E!!!')

  // line 26 defines an empty array that recieves each letter processed by the separate function
  // line 27-31 a for loop used to iterate through the given string. This will output each letter to a separate function (line 25). This will also recieve the results of that separate function and store the returned information in an array (line 26).
  // line 32 takes the array that includes the results of the separate function and combines each element together. Due to not providing an initial value this will convert the array into a string. 
  // line 33 allows the output of logger to be called. This will output any given string with each element in the string separated by an exclamation mark!
  // line 36-41 defines a new function that has the purpose of inserting an exclamation mark after each string (letter) it recieves as input
  // line 39 takes the "letter + !" and converts it to an array. This is done so that it can be stored with each letter original function until all required letters have been passed through this function. 
  // line 40 outputs the array containing a string (letter + !), which will be called by the original function.
  
  //Your code here

  var stringAsArray = [];
  
  for (var i = 0; i < str.length; i++) {
    var currentLetter = str[i];
    var sendToFunction = func(currentLetter);
    stringAsArray.push(sendToFunction);
  }
  
  var completedStringWithExclamations = stringAsArray.reduce((previousLetter, currentLetter) => previousLetter + currentLetter);
  return completedStringWithExclamations;
}

function addExclamationPoint(currentLetter) {

  var addExclamation = currentLetter + '!'
  var exclamationArray = addExclamation.split()
  return addExclamation;
}

var greeting = 'WELCOME!'
var output = logger(addExclamationPoint, greeting);
console.log(output)