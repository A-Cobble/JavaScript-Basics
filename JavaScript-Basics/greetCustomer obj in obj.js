var customerData = {
  'Joe': {
    visits: 1
  },
  'Carol': {
    visits: 2
  },
  'Howard': {
    visits: 3,
  },
  'Carrie': {
    visits: 4
  }
};

function greetCustomer(firstName) {

  if (customerData[firstName] == undefined) {
    return 'Welcome! Is this your first time?'
  }

  var numberOfVisits = customerData[firstName]['visits'];
  
  if (numberOfVisits === 1) {
    return `Welcome back, ${firstName}! We're glad you liked us the first time!`
  } else {
    return `Welcome back, ${firstName}! So glad to see you again!`
  }
  
  // your code here
}




var output = greetCustomer('Terrance');
console.log(output); // --> 'Welcome! Is this your first time?'

var output = greetCustomer('Joe');
console.log(output); // --> 'Welcome back, Joe! We're glad you liked us the first time!'

var output = greetCustomer('Carol');
console.log(output); // --> 'Welcome back, Carol! So glad to see you again!'