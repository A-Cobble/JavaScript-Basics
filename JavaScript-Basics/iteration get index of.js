function getIndexOf(char, str) {

  var count = 0
  var letters = str.split('')

  if (letters.includes(char) === false) {
    return count = -1
  }

  for (var i = 0; i < letters.length; i++) {
    var currentletter = letters[i]
    if (currentletter === char ) {
      count = i
      return count
    }
  }
  
  // your code here
  /* START SOLUTION */

  /* END SOLUTION */
}


var output = getIndexOf('a', 'I am a hacker');
console.log(output); // --> 2