function computeCompoundInterest(principal, interestRate, compoundingFrequency, timeInYears) {
  
  var freqMultTime = compoundingFrequency * timeInYears
  var growthRate = Math.pow((1 + (interestRate / compoundingFrequency)),freqMultTime);
  var principalMultgrowthRate = principal * growthRate
  var compoundInterest = principalMultgrowthRate - principal;

  return compoundInterest
  
  // your code here
}

var output = computeCompoundInterest(1500, .043, 4, 6);
console.log(output); // --> 438.8368221341061



//Total comput interest = (P(1 + (r/n))^(nt))-P
//P = principal
//r = interestRate
//n = compundingFrequency
//t = timeInYears