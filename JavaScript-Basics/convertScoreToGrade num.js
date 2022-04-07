function convertScoreToGradeWithPlusAndMinus(score) {

  if (score > 100 === true || score < 0 === true) {
    return 'INVALID SCORE'
  }

  var newString = ''
  if (score >= 98 && score <= 100) {
    newString = 'A+'
  }
  if (score >= 93 && score <= 97) {
    newString = 'A'
  }
  if (score >= 90 && score <= 92) {
    newString = 'A-'
  }
  if (score >= 88 && score <= 89) {
    newString = 'B+'
  }
  if (score >= 83 && score <= 87 ) {
    newString = 'B'
  }
  if (score >= 80 && score <= 82) {
    newString = 'B-'
  }
  if (score >= 78 && score <= 79) {
    newString = 'C+'
  }
  if (score >= 73 && score <= 77 ) {
    newString = 'C'
  }
  if (score >= 70 && score <= 72) {
    newString = 'C-'
  }
  if (score >= 68 && score <= 69) {
    newString = 'D+'
  }
  if (score >= 63 && score <= 67 ) {
    newString = 'D'
  }
  if (score >= 60 && score <= 62) {
    newString = 'D-'
  }
  if (score >= 0 && score <=59 ) {
    newString = 'F'
  }
  return newString
    
  // your code here
}

var output = convertScoreToGradeWithPlusAndMinus(91);
console.log(output); // --> 'A-'