function countAllCharacters(string) {
  // your code here
  if (string.length === '') {
    return {};
  }

  var counts = {}
  var eachCharacter = string.split('');

  for (var i = 0; i < eachCharacter.length; i++) {
    var currentCharacter = eachCharacter[i];
    if (counts[currentCharacter] === undefined) {
      counts[currentCharacter] = 1;
    } else {
      counts[currentCharacter]++;
    }
  }
  return counts;
}

var result1 = countAllCharacters('banana');
console.log('should log "{b: 1, a: 3, n: 2}":', result1);

var result2 = countAllCharacters('');
console.log('should log "{}":', result2);