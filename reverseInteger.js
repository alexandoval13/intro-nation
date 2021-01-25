/*

Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
*/

var reverse = function(x) {
  // set true or false positive check ( >= 0 ? )
  if (x >= 0) {
    let pos = true;
    let revString = ''
  } else {
    let pos = false;
    let revString = '-'
  }

  // convert to a string
  let stringNum = x.toString();

  // work from the last char to the first, concatting to a string
  for (var i = stringNum.length - 1; i > 0; i--) {
    revString += stringNum[i];
  }
  // check to see if it's within range
  if (Number(revString) >= -231 && Number(revString) <= 213) {
    // if so return reversed
    return Number(revString)
  } else {
    // else return 0
    return 0;
  }
};