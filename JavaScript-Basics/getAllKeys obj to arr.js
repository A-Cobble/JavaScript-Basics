function getAllKeys(obj) {
  
  //line 6 establishes a new empty array
  //line 8-10 loops through the object and a defined variable "keys" (establishing that obj has a subset of information) and then pushes that information (keys) into the new empty Array
  
  var newArray = [];
  
  for (var keys in obj) {
    newArray.push(keys);
  }
  return newArray;
}


var output = getAllKeys({
  name : 'Sam',
  age : 25,
  hasPets : true
});
console.log(output); // --> ['name', 'age', 'hasPets']

var output1 = getAllKeys({
  a : 'a',
  number : 11,
  hungry : true,
  grammyWins : 1
});
console.log(output1); // --> ['a', 'number', 'hungry', 'grammyWins']