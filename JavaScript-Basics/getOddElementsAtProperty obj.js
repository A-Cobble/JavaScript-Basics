function getOddElementsAtProperty(obj, key) {
  
  if (Array.isArray(obj[key]) === false) {
    return [];
  }

  var newArray = [];
  for (var i = 0; i < obj[key].length; i++) {
    var values = obj[key][i];
    if (values % 2 !== 0) {
      newArray.push(values);
    }
  }
  return newArray;
  // your code here
  /* START SOLUTION */

  /* END SOLUTION */
}

var obj = {
  key: [1, 2, 3, 4, 5]
};
var output = getOddElementsAtProperty(obj, 'key');
console.log(output); // --> [1, 3, 5]