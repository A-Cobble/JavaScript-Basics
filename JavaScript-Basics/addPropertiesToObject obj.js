function addPropertiesToObject(obj1, obj2) {
  // Your psuedocode here
  
  //should return a single object
  //should return the second parameter
  //should return the second parameter with values from the first
  //the return value should depend on the parameters and not be hard coded
  
  // inputs = obj1 and obj2 (example: obj1 = {cow: 'moo', sheep: 'baa'} and obj2 = {cow: 'calf', horse = 'foal'} this would lead to a resultant output = {cow:'moo', horse:'foal', sheep:'baa'}
  // Object.assign takes a target object (obj2) and modifies it with the copied properties of another object (obj1). If the target obj and modifying obj have the same key, the modifying obj's property will overwrite that property in the target obj.
  
  // line 17 = obj2 is the object that I want returned therefore obj2 must be listed first. obj1 properties will then be used to modify obj2.
  // line 19 = allows the function to be called returning obj2 with its own properties and obj1's properties
  
  // Your code here

  var obj2WithProperties = Object.assign(obj2, obj1); 
   
  return obj2WithProperties;
}

animalNoise = {cow: 'moo', sheep: 'baa'};
offspring = {cow: 'calf', horse = 'foal'};
var output = addPropertiesToObject(animalNoise, offspring);
console.log(output);// --> {cow: 'moo', horse: 'foal', sheep: 'baa'}