// FUNCTION DEFINITION(S)

// USE THIS FUNCTION TO GENERATE A RANDOM NUMBER
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function decorateClassListWithAges(classList) {
  var namesWithAges = []
  for (var i = 0; i < classList.length; i++) {
    var currentName = classList[i]
    var individualObj = {'name': currentName, 'age': getRandomIntInclusive(10,11)}
    namesWithAges.push(individualObj)
    
  }
  return namesWithAges
  
  // creates an object for each string in the input array, with an age of 10 or 11
  // returns an array of these objects
}

// ASSERTION FUNCTION(S) TO BE USED
function assertObjectsInArraySame(actual, expected, testName) {
  
  var actualNames = actual.map(object => object.name).toString();
  var expectedNames = expected.map(object => object.name).toString();

  var actualAgesArray = actual.map(object => object.age);
  var actualAges = actualAgesArray.filter(age => age >= 10 && age <= 11)
  
  if (actualAgesArray.length === actualAges.length){
    var assertAges = true
  } else {
    assertAges = false
  }
  
   if (actualNames === expectedNames) {
     var assertNames = true
   } else {
     assertNames = false
   }

  if (assertAges === true && assertNames === true) {
    console.log('Passed')
  } else {
    console.log('FAILED [' + testName + ']')
  }
}
// TESTS CASES
var names = ["Joe", "Jack", "John", "Fred", "Frank", "Barry", "Larry", "Mary",
"Harry", "Farrell", "Susan", "Monica", "Keira", "Caroline", "Harriet", "Erica",
"Luann", "Cheryl", "Beth", "Rupa", "Linda", "Allison", "Nancy", "Dora"];
//Expected Outcome 
var classListWithAges = [{"name":"Joe","age":11},{"name":"Jack","age":10},
{"name":"John","age":11},{"name":"Fred","age":11},{"name":"Frank","age":11},
{"name":"Barry","age":11},{"name":"Larry","age":11},{"name":"Mary","age":11},
{"name":"Harry","age":11},{"name":"Farrell","age":10},{"name":"Susan","age":10},
{"name":"Monica","age":11},{"name":"Keira","age":10},{"name":"Caroline","age":10},
{"name":"Harriet","age":11},{"name":"Erica","age":11},{"name":"Luann","age":10},
{"name":"Cheryl","age":11},{"name":"Beth","age":10},{"name":"Rupa","age":11},
{"name":"Linda","age":10},{"name":"Allison","age":10},{"name":"Nancy","age":10},
{"name":"Dora","age":10}]
var output = decorateClassListWithAges(names);
var assertOutput = assertObjectsInArraySame(output, classListWithAges, "Decorate the Class List With Ages");
console.log(output);
console.log(assertOutput);