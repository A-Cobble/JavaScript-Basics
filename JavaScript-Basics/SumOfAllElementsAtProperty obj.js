function getSumOfAllElementsAtProperty(obj, key) {

  if (obj[key] === undefined || Array.isArray(obj[key]) === false || obj[key].length === 0) {
    return 0
  }

  var sum = obj[key].reduce((previousValue, currentValue) => previousValue + currentValue);
  return sum
  
  // your code here
}

var obj = {
  key: [1, 2]
};
var output = getSumOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 13