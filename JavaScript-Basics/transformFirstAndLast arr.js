function transformFirstAndLast(array) {

  var newArray = Array.from(array)
  var newObj = {} 
  var firstElement = newArray.shift();
  var lastElement = newArray.pop();
  var key = firstElement;

  
  newObj[key] = lastElement
  return newObj
  
  // your code here
}

var output = transformFirstAndLast(['Kevin', 'Bacon', 'Love', 'Hart', 'Costner', 'Spacey']);
console.log(output); // --> '{ Kevin : 'Spacey' }'