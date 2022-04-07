function findSmallestNumberAmongMixedElements(arr) {
  
  if (arr.length === 0) {
    return 0
  }

  var filteredForString = arr.filter(function(arr) {
    if (typeof arr === 'number') {
      return true
    }
  }) 

  if (filteredForString.length === 0) {
    return 0
  }
  
  var smallest = Math.min(...filteredForString)
  return smallest
  
  // your code here
}

var output = findSmallestNumberAmongMixedElements([]);
console.log(output); // --> 4