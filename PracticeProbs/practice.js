// practice worksheet

// create calculator functions
function addTwoValues (input1, input2) {
  return input1 + input2;
};

function subtractTwoValues(input1, input2) {
  return input1 - input2;
};

function multiply(input1, input2) {
  return input1 * input2;
};

function divide(input1, input2) {
  return input1 / input2;
}

// automated

function returnGreeting (name) {
  return 'Hi, ' + name + '.';
}

function returnFarewell (name) {
  return 'Bye, ' + name + '.';
}


// WRITE A TEST SUITE
var test = addTwoValues(2, 4);
var expected = 6;
var assertion = test === expected;
console.log(assertion);