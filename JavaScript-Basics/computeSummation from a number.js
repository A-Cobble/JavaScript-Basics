function computeSummationToN(n) {
 
  var number = 0
  var newArray = [0]
  while (number < n) {
    number++
    newArray.push(number)
  }
  var summation = newArray.reduce ((previousValue, currentValue) => previousValue + currentValue)
  return summation
  
  // your code here
}

var output = computeSummationToN(0);
console.log(output); // --> 21