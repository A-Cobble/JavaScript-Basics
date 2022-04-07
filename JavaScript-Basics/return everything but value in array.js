function removeElement(array, discarder) {
  
  var newArray = [];
  for (var values of array) {
    if (values != discarder) {
      newArray.push(values)
    }
  }
  return newArray
  // your code here
  /* START SOLUTION */

  /* END SOLUTION */
}

var output = removeElement(['there', 'it', 'is', 'there'], 2);
console.log(output); // --> [1, 3, 1]