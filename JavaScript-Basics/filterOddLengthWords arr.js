function filterOddLengthWords(words) {

  if (Array.isArray(words) === false){
    return [];
  }
  
  var newArray = []
    for (var i = 0; i < words.length; i++) {
      var letters = words[i].split('')
      if (letters.length % 2 !== 0){
        newArray.push(words[i])
      }
    }
  return newArray
  // your code here
  /* START SOLUTION */

  /* END SOLUTION */
}

var output = filterOddLengthWords();
console.log(output); // --> ['there', "now']