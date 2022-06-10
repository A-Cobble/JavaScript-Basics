// Skeleton

// FUNCTION DEFINITION(S)
function PhoneNumberFormatter(numbers) {
  this.numbers = numbers;
}

PhoneNumberFormatter.prototype.render = function() {
  var string = '';
  // your code here
  string += this.parenthesize(this.getAreaCode())
  string += ' '
  string += this.getExchangeCode();
  string += '-'
  string += this.getLineNumber()
  return string;
};

PhoneNumberFormatter.prototype.getAreaCode = function() {
  // your code here
  return '' + this.slice(0,3)
};

PhoneNumberFormatter.prototype.getExchangeCode = function() {
  // your code here
  return '' + this.slice(3,6);
};

PhoneNumberFormatter.prototype.getLineNumber = function() {
  // your code here
  return '' + this.slice(6,10);
};

PhoneNumberFormatter.prototype.parenthesize = function(string) {
  return '(' + string + ')';
};

PhoneNumberFormatter.prototype.slice = function(start, end) {
  return this.numbers.slice(start, end).join('');
};

// ASSERTION FUNCTION(S) TO BE USED
function assertPhoneNumberFormatter(actual, expected, testName){
  if (actual === expected){
    console.log("Passed");
  } else {
    console.log("FAILED [" + testName + "]");
  }
}
// TESTS CASES
var testPhoneNumber = new PhoneNumberFormatter([5, 5, 5, 0, 1, 2, 3, 4, 5 ,6])
var expectedPhoneNumber = '(555) 012-3456'
var expectedFailTest = '(666) 666-2323'

var output = assertPhoneNumberFormatter(testPhoneNumber.render(), expectedPhoneNumber, "Format an array of 10 numbers into a phone number");

var failOutput = assertPhoneNumberFormatter(testPhoneNumber.render(), expectedFailTest, "Format an array of 10 numbers into a phone number");

console.log(testPhoneNumber.render());
console.log(output);
console.log(failOutput);