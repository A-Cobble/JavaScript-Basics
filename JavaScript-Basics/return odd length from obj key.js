function getOddLengthWordsAtProperty(obj, key) {
  
  if(Array.isArray(obj[key]) === false) {
    return [];
 }
  
  var newArray = [];
  for (var key in obj) {
    for (var i = 0; i < obj[key].length; i++) {
      var valueSplit = obj[key][i].split('');
      if (valueSplit.length % 2 !== 0) {
        newArray.push(obj[key][i]);
      }
    }
  }
  return newArray;
  
  // your code here
  /* START SOLUTION */

  /* END SOLUTION */
}

var obj = {
  key: ['It', 'has', 'some', 'words']
};
var output = getOddLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['has', 'words']