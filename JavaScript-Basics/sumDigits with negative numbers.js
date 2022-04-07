function sumDigits(num) {
  
  if (num < 0) {
    var positive = Math.abs(num)
    var arrayOfnumbers = Array.from(String(positive),Number)
    return arrayOfnumbers.reduce((previousValue, currentValue) => previousValue + currentValue, arrayOfnumbers[0] * -2)
  } else {
    var arrayOfNum = Array.from(String(num), Number);
    return arrayOfNum.reduce((previousValue, currentValue) =>previousValue + currentValue)
  }
  // your code here
}

var output = sumDigits(1148);
console.log(output); // --> 14

var output = sumDigits(-316);
console.log(output); // --> 4