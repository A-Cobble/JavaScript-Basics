function getLengthOfLongestElement(arr) {

  var newArray = []
  for (var i = 0; i < arr.length; i++) {
    var currentword = arr[i].length;
    newArray.push(currentword)
    }
  var longest = Math.max(...newArray)
  if (longest === -Infinity) {
    return 0
  } else {
    return longest
  }
  // your code here
  /* START SOLUTION */

  /* END SOLUTION */
}
var output = getLengthOfLongestElement(['one', 'two', 'thre', 'ten']);
console.log(output); // --> 5