function computeProductOfAllElements(arr) {
  
  if (arr.length === 0) {
   return 0
  }
  
  var result = arr.reduce(function (previousValue, currentValue) {
    return previousValue * currentValue
  })
    return result 
  // your code here
}

var output = computeProductOfAllElements([2, 5, 6]);
console.log(output); // --> 60