/*

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.
*/


// NOTE: LEETCODE DID NOT LIKE SOLUTION -- COME BACK AT LATER POINT

var listToNumber = function(list) {
  //   debugger;
    // declare number
    var numberStr = ''
    // iterate through list in reverse
    for (var i = list.length - 1; i >= 0; i--) {
      numberStr += String(list[i]);
    }
    // return number
    return Number(numberStr);
  }

  var numberToList = function(num) {
    var numStr = String(num);
    var numList = [];
    for (var i = numStr.length - 1; i >= 0; i--) {
      numList.push(Number(numStr[i]));
    }
    return numList;
  }

  var addTwoNumbers = function(l1, l2) {
    // convert the first list to a number
      var numl1 = listToNumber(l1);
    // convert the secong list to a number
      var numl2 = listToNumber(l2);
    // add the numbers
      var addedNum = numl1 + numl2;
      console.log(numl1, '+', numl2, '=', addedNum);
    // convert the result to a list in reverse
      return numberToList(addedNum);
  };

  // TEST SUITE
  var assertEquals = function(expected, returned, name) {
    if (expected === returned) {
      console.log('Test \"', name + '" returned expected results.');
    } else {
      console.log('Test \"', name + '" did not return expected results. Received [' + returned + '], expected [' + expected + '].');
    }
  }

  var assertArrayEquals = function(expected, returned, name) {
    if (JSON.stringify(expected) === JSON.stringify(returned)) {
      console.log('Test \"', name + '" returned expected results.');
    } else {
      console.log('Test \"', name + '" did not return expected results. Received [' + returned + '], expected [' + expected + '].');
    }
  }
  // helper func
  assertEquals(321, listToNumber([1, 2, 3]), 'Function listToNumber should return a number from an arrray of numbers in reverse order');
  assertArrayEquals([1, 2, 3], numberToList(321), 'Function numberToList returns an array of numbers in reverse order');
  // func
  assertArrayEquals([5,7,9], addTwoNumbers([4, 5, 6], [1, 2, 3]), 'Function addTwoNumbers should return a sum in reversed array');