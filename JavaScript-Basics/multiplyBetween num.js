function multiplyBetween(num1, num2) {

  if (num1 >= num2) {
    return 0
  }
  
  var number = num1;
  var newArray = [num1];
  while (number < num2 - 1) {
    number++;
    newArray.push(number);
  }
  var multiplication = newArray.reduce ((previousValue, currentValue) => previousValue * currentValue);
  return multiplication;
}

var output = multiplyBetween(2, 5);
console.log(output); // --> 24