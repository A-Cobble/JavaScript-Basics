function getAverageOfElementsAtProperty(obj, key) {
 
  if(Array.isArray(obj[key]) !== true) {
    return 0;
  }
  
  var result = 0;
  var sum = 0;
  for (var key in obj) {
    for (var i = 0; i < obj[key].length; i++) {
    sum += obj[key][i];
    result = sum/obj[key].length;
    }
  }
  return result;
  
  // your code here
  /* START SOLUTION */

  /* END SOLUTION */
}

var obj = {
  
};
var output = getAverageOfElementsAtProperty(obj, 'key');
console.log(output); // --> 2