function filterOddElements(numbers) {
  //edge case
  if (numbers.length === 0){
    return [];
  }

  var oddNumbers = [];//resulting array

  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0){
      oddNumbers.push(numbers[i]);
    }
  }

  return oddNumbers;
}

var result = filterOddElements([1,2,3,4,5,6,7,8,9]);
console.log(result);