function assertObjectsEqual(actual, expected, testName) {
  // your code here

  var jsonActual = JSON.stringify(actual);
  var jsonExpected = JSON.stringify(expected);
  if (jsonActual === jsonExpected) {
    console.log ("passed")
  } else {
    console.log("FAILED [" + testName + "] Expected " + jsonExpected + ", but got " + jsonActual)
  }
}


var person = {
  firstName: 'Joe',
  lastName: 'Blow'
};
updateObject = (person, 'age', 35);

var expected = {
  firstName: 'Joe',
  lastName: 'Blow',
  age: 35
};
var output = assertObjectsEqual(person, expected, "adds person's non-existing age field");
// console output:
// FAILED [adds person's non-existing age field] Expected {"firstName":"Joe", "lastName":"Blow", age:35}, but got {"firstName":"Joe", "lastName":"Blow"}
console.log(output)