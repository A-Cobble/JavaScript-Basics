function findShortestWordAmongMixedElements(arr) {
  
  if (arr.length === 0) {
    return ''
  }

  var filteredForString = arr.filter(function(arr) {
    if (typeof arr === 'string') {
      return true
    }
  }) 

  if (filteredForString.length === 0) {
    return ''
  }
  
  var newArray = []
  for (var i = 0; i < filteredForString.length; i++) {
    var currentWord = filteredForString[i]
    newArray.push(currentWord.length)
  }

  var shortest = Math.min(...newArray)
  var position = newArray.indexOf(shortest)
  return filteredForString[position]
}

var output = findShortestWordAmongMixedElements([4, 'two', 1, 'six']);
console.log(output); // --> 'two'