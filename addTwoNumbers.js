/*

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.
*/

var listToNumber = function(list) {
  // declare number
  var numberStr = ''
  // iterate through list in reverse
  for (var i = list.length - 1; i > 0; i--) {
    numberStr += String(list[i]);
  }
  // return number
  return Number(numberStr);
}

var addTwoNumbers = function(l1, l2) {
  // convert the first list to a number

  // convert the secong list to a number

  // add the numbers

  // convert the result to a list in reverse
};

// TEST SUITE
var assertEquals = function(expected, returned, name) {
  if (expected === returned) {
    console.log('Test "', name + '" returned expected results');
  } else {
    console.log('Test "', name + '" did not return expected results. Received [' + returned + '], expected [' + expected + '].');
  }
}
// helper func
assertEquals(321, listToNumber(1, 2, 3), 'Function listToNumber should return a reversed number from an arrray of numbers'