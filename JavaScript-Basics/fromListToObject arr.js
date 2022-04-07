function fromListToObject(array) {
  
  //line 7 duplicates the array to make sure we don't change the given array
  //line 8 takes entire array and reduces it down as specified. establishes obj[key[value] using previous to define which array it's pulling from. Current[0] as the key and current[1] as value. Establishes an initial value of an empty obj to have results output into the object
  //line 8-9 returns the newly created object. reduce is used to step through an array element-by-element. This allows us to group/combine/do something to the preceeding value and the current value to "reduce" the array into something smaller.
 
  var newArray = Array.from(array)
  var newObj = newArray.reduce((previous, current) => {previous[current[0]] = current[1]; return previous;}, {})
  return newObj

  
  //line 13-16 alternitive way to preform challenge. But not accepted by this challenge (works in Replit)
  //var newObj = {};
  //var newArr = Array.from(array);
  //newObj = Object.fromEntries(newArr);
  //return newObj;
  
}

var output = fromListToObject([['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]])
console.log(output); // --> '{make : 'Ford', model : 'Mustang', year : 1964}'