function filterOddElements(arr) {
  
  var result = arr.filter(function filterOddElements(arr){
      if(arr % 2 !== 0) {
          return true
      }
  })
  return result
  // your code here
}

var output = filterOddElements([1, 2, 3, 4, 5]);
console.log(output); // --> [1, 3, 5]