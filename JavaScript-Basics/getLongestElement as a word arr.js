function getLongestElement(arr) {
  
  if (arr.length === 0) {
    return ''
  }
  
  var newArray = []
  for (var i = 0; i < arr.length; i++) {
    var currentWord = arr[i]
    newArray.push(currentWord.length)
  }

  var longest = Math.max(...newArray)
  var position = newArray.indexOf(longest)
  return arr[position]
  
  // your code here
}

var output = getLongestElement([]);
console.log(output); // --> 'three'