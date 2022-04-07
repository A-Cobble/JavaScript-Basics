function transformEmployeeData(employeeData) {
 
 //line 9 separates Joe from Mary
 //line 10 gets rid of excess '[ ]' so we only have Mary's information
 //line 11 lets us have an array to put Joe's and Mary's object in.
 //line 13 and 17 uses reduce to reduce the number of arrays into an object (the initial value) in the form of obj[key[value]] = key[value]
 //line 15 and 19 puts the objects into the empty array
 
  var Joe = employeeData.shift();
  var Mary = employeeData.shift();
  var finalArray = [];

  var objJoe = Joe.reduce((previous, current) => {previous[current[0]] = current[1]; return previous;}, {});
  
  finalArray.push(objJoe);
  
  var objMary = Mary.reduce((previous, current) => {previous[current[0]] = current[1]; return previous;}, {});
  
  finalArray.push(objMary);
  
  return finalArray;
 
  // your code here
}


var output = transformEmployeeData([
    [
        ['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']
    ],
    [
        ['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']
    ]
])
console.log(output); // --> '[
//     {firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk'},
//     {firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager'}
// ]'