function getSquaredElementsAtProperty(obj, key) {

  if (Array.isArray(obj[key]) === false) {
    return []
  }

  var newArray = []
  for (var i = 0; i < obj[key].length; i++) {
    var value = obj[key][i]
    newArray.push(Math.pow(value, 2))
  }
  return newArray
  
  // your code here
  /* START SOLUTION */

  /* END SOLUTION */
}

var obj = {
  key: [2, 1, 5, 7]
};
var output = getSquaredElementsAtProperty(obj, 'key');
console.log(output); // --> [4, 1, 25]