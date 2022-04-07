function isOddWithoutModulo(num) {

  var division = num / 2
  if (Number.isInteger(division) === true) {
    return false
  } else {
    return true
  }
}
  

var output = isOddWithoutModulo(19);
console.log(output); // --> true